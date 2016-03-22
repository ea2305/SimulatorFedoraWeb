<?php
    require "Conexion.php";
    class UserDB extends Conexion{//Extends all methods of conection with DB

        //Call all users on db
        public function getUsers(){
            if(!$this->isConnected()){return;}

            $query = "SELECT * FROM Users";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                $information = $information.',{"id" : "'.$fila['id'].'","name" : "'.$fila['name'].'", "img" : "'.$fila['img'].'", "email" : "'.$fila['email'].'", "password" : "'.$fila['password'].'", "state" : "'.$fila['state'].'"}';
            }
            mysql_close($this->link);
            return "[" . substr($information,1) . "]";
        }

        //Compare if user is in db or no?
        public function isUser($name, $pass){

            if(!$this->isConnected()){return;}
            /*
            $query = "SELECT * FROM Users WHERE name LIKE '$name' AND password LIKE '$pass'" ;
            $res = mysql_query($query,$this->link);
            */
            $res = $this->queryLoad("SELECT * FROM Users WHERE name LIKE '$name' AND password LIKE '$pass'");

            if (!$res) {// Verifiacmos el error de conexion
                mysql_error();
            }elseif (mysql_num_rows($res) <= 0) {// en caso de que no regrese resultados
                header("Location: ../../index.php");
            }else {//send menu
                $fila = mysql_fetch_assoc($res);
                session_start();
                $_SESSION['name'] = $name;
                $_SESSION['password'] = $pass;
                $_SESSION['id'] = $fila['id'];
                $_SESSION['state'] = $fila['state'];
                header("Location: ../../views/system.php");
            }
        }

        //Remove user.
        public function removeUser($user, $id){
            session_start();

            if(!$this->isConnected()){return;}

            if($_SESSION['id'] != $id && $_SESSION['name'] != $user){
                $query = "DELETE FROM Users WHERE id LIKE $id";
                $res = mysql_query($query,$this->link);
                mysql_close($this->link);//Cerramos la conexion correctamente

                if ($res) {// Verifiacmos el error de conexion
                    echo "Datos removidos correctamente";
                }else {// en caso de que no regrese resultados
                    echo mysql_error();;
                }
            }else{
                mysql_close($this->link);//Cerramos la conexion correctamente
                echo "No se puede eliminar el usuario actual";
                return;
            }
        }

        public function addUser($name, $password, $email, $state){

            if(!$this->isConnected()){return;}

            $query = "INSERT INTO `Users`(id, name, password, email, state, img)
                      VALUES (NULL,'$name','$password','$email',$state,'./public/img/users/other.png')";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                echo "Datos insertados correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();
            }
            mysql_close($this->link);
        }

        public function getAllData($id){

            if(!$this->isConnected()){
                echo "error";
                return;
            }

            $query = "SELECT * FROM Users WHERE id LIKE '$id'";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            //Declaration of array to return
            $information = "";
            $data = array();
            while ($row = mysql_fetch_assoc($res)) {//for each of result set
                $data[] = $row;
                //$information = $information.',{ "id" : "'.$fila['id'].'","name" : "'.$fila['name'].'", "img" : "'.$fila['img'].'", "email" : "'.$fila['email'].'", "password" : "'.$fila['password'].'", "state" : "'.$fila['state'].'"}';
            }
            mysql_close($this->link);
            //return substr($information,1);
            return json_encode($data);
        }

        public function getState($id){

            if(!$this->isConnected()){return;}

            $query = "SELECT state FROM Users WHERE id LIKE $id";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            mysql_close($this->link);
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                return $fila['state'];
            }
            return "";
        }

        public function editUser($name, $password, $email, $state, $id){

            if(!$this->isConnected()){return;}

            $query = "UPDATE `Users` SET `id`=$id,`name` = '$name',`password`='$password',`email`='$email',`state`='$state' WHERE id LIKE $id ";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                echo "Datos actualizados correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();
            }
            mysql_close($this->link);
        }

        public function getCurrentUser(){
            session_start();
            echo $_SESSION['id'];
        }

        private function queryLoad($query){
            return mysql_query($query,$this->link);
        }
    }
 ?>
