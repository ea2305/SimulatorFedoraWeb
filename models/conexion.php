<?php
    //Create conexion to data base
    class Conexion{

        protected $db_name;//name db
        protected $route;// direcction to connect
        protected $user_db;
        protected $password_db;
        protected $link;

        public function __construct($db_name,$route,$user_db,$password_db){
            $this->db_name = $db_name;
            $this->route = $route;
            $this->user_db = $user_db;
            $this->password_db = trim($password_db," ");

        }

        public function connectDB(){
            // Conectando, seleccionando la base de datos
            $this->link = mysql_connect($this->route, $this->user_db, $this->password_db)
                or die('No se pudo conectar: ' . mysql_error());
                $this->selectDB();
        }

        public function selectDB(){

            if (!mysql_select_db($this->db_name, $this->link)) {
                echo 'No pudo seleccionar la base de datos';
                exit;
            }
        }

        public function printData(){
            echo $this->db_name.'<br>';
            echo $this->route.'<br>';
            echo $this->user_db.'<br>';
            echo $this->password_db.'<br>';
        }

        public function getUsers(){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "Error";
            }

            $query = "SELECT name,img FROM Users";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                $information = $information.',{ "name" : "'.$fila['name'].'", "img" : "'.$fila['img'].'"}' ;
            }
            mysql_close($this->link);
            return "[" . substr($information,1) . "]";
        }

        public function isUser($name, $pass){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "SELECT * FROM Users WHERE name LIKE '$name' AND password LIKE '$pass'" ;
            $res = mysql_query($query,$this->link);

            if (!$res) {// Verifiacmos el error de conexion
                mysql_error();
            }elseif (mysql_num_rows($res) <= 0) {// en caso de que no regrese resultados
                header("Location: .index.php");
            }else {//Enviamos a menu
                session_start();
                $_SESSION['name'] = $name;
                $_SESSION['password'] = $pass;
                header("Location: ../views/system.php");
            }
        }

        public function removeUser($user, $img){
            $img = substr($img,1);
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "SELECT * FROM Users WHERE name LIKE '$user'";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                if($fila['name'] == $user){
                    $information = $fila['id'];
                }else{ $information = -1;}
            }

            if ($information != -1){
                $query = "DELETE FROM Users WHERE id LIKE $information";
                $res = mysql_query($query,$this->link);

                if ($res) {// Verifiacmos el error de conexion
                    echo "Datos removidos correctamente";
                }else {// en caso de que no regrese resultados
                    echo mysql_error();;
                }
            }else{
                echo "Error";
            }
            mysql_close($this->link);
        }

        public function addUser($name, $password, $email, $state){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

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

        public function getAllData($name,$img){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "SELECT * FROM Users WHERE name LIKE '$name'";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                if($fila['name'] == $name){
                    $information = $information.',{ "name" : "'.$fila['name'].'", "img" : "'.$fila['img'].'", "email" : "'.$fila['email'].'", "password" : "'.$fila['password'].'", "state" : "'.$fila['state'].'"}';
                }else{ $information = -1;}
            }
            return substr($information,1);
        }

        public function editUser($name, $password, $email, $state){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "UPDATE `Users` SET `id`=NULL,`password`='$password',`email`='$email',`state`='$state' WHERE name LIKE '$name'";

            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                echo "Datos actualizados correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();
            }
            mysql_close($this->link);
        }


    }
?>
