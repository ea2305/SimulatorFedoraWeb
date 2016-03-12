<?php
/*
========================================================================
    Create conexion with Data Base.
    *Content All method of logic.
    author : Elihu Alejandro Cruz Albores.
    version : 1.0.5
========================================================================
*/
    class Conexion{

        protected $db_name;//name db
        protected $route;// direcction to connect
        protected $user_db;//User od db
        protected $password_db;// password_db
        protected $link;// Content the conexion fo db

        //Call values of class
        public function __construct($db_name,$route,$user_db,$password_db){
            $this->db_name = $db_name;
            $this->route = $route;
            $this->user_db = $user_db;
            $this->password_db = trim($password_db," ");

        }

        //Conect to DB and select db
        public function connectDB(){
            // Conectando, seleccionando la base de datos
            $this->link = mysql_connect($this->route, $this->user_db, $this->password_db)
                or die('No se pudo conectar: ' . mysql_error());
                $this->selectDB();
        }

        //Conect with Table of DB
        public function selectDB(){
            if (!mysql_select_db($this->db_name, $this->link)) {
                echo 'No pudo seleccionar la base de datos';
                exit;
            }
        }

        //Print given values
        public function printData(){
            echo $this->db_name.'<br>';
            echo $this->route.'<br>';
            echo $this->user_db.'<br>';
            echo $this->password_db.'<br>';
        }

        //Call all users on db
        public function getUsers(){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "Error";
            }

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
            $this->connectDB();//Start conection
            if(!$this->link){ //return data conection
                return "false";
            }

            $query = "SELECT * FROM Users WHERE name LIKE '$name' AND password LIKE '$pass'" ;
            $res = mysql_query($query,$this->link);

            if (!$res) {// Verifiacmos el error de conexion
                mysql_error();
            }elseif (mysql_num_rows($res) <= 0) {// en caso de que no regrese resultados
                header("Location: ../index.php");
            }else {//send menu
                $fila = mysql_fetch_assoc($res);
                session_start();
                $_SESSION['name'] = $name;
                $_SESSION['password'] = $pass;
                $_SESSION['id'] = $fila['id'];
                $_SESSION['state'] = $fila['state'];
                header("Location: ../views/system.php");
            }
        }

        //Remove user.
        public function removeUser($user, $id){
            session_start();
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

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

        public function getAllData($name){
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

                    $information = $information.',{ "id" : "'.$fila['id'].'","name" : "'.$fila['name'].'", "img" : "'.$fila['img'].'", "email" : "'.$fila['email'].'", "password" : "'.$fila['password'].'", "state" : "'.$fila['state'].'"}';
                }else{ $information = -1;}
            }
            mysql_close($this->link);
            return substr($information,1);
        }

        public function getState($id){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }
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

        public function getId($name){
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

            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                if($fila['name'] == $name){return $fila['id'];}else{  return "";}
            }
            mysql_close($this->link);
            return substr($information,1);
        }


        public function editUser($name, $password, $email, $state, $id){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

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
            echo $_SESSION['name'];
        }
/*
================================================================================
    Note methods
================================================================================
*/
        public function getAllNotes($id){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "SELECT * FROM Notes WHERE id LIKE '$id'";
            $res = mysql_query($query,$this->link);

            if (!$res) {
                echo mysql_error();
                return;
            }
            //Declaration of array to return
            $information = "";
            while ($fila = mysql_fetch_assoc($res)) {//for each of result set
                if($fila['id'] == $id){
                    $information = $information.',{ "id" : "'.$fila['id'].'", "text" : "'.$fila['text'].'", "key_note" : "'.$fila['key_note'].'"}';
                }else{ $information = -1;}
            }
            mysql_close($this->link);
            return ("[".substr($information,1)."]");
        }

        public function removeIdNote($id){

            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }

            $query = "DELETE FROM Notes WHERE id LIKE $id";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                //echo "Datos removidos correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

        public function updateNotes($id,$text,$key_note){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }
            $query = "INSERT INTO `Notes`(`id`, `text`, `key_note`) VALUES ('$id','$text','$key_note')";
            //$query = "UPDATE `Notes` SET `id`='$id',`text`='$text',`key_note`='$key_note' WHERE id LIKE '$id' AND key_note LIKE '$key_note'";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                echo "Datos actualizados correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

        public function removeNote($id,$key_note){
            $this->connectDB();//Start conection
            if(!$this->link){ //Retronamos error al no conecctar
                return "false";
            }
            $query = "DELETE FROM Notes WHERE id LIKE $id AND key_note LIKE $key_note";
            $res = mysql_query($query,$this->link);

            if ($res) {// Verifiacmos el error de conexion
                //echo "Datos removidos correctamente";
            }else {// en caso de que no regrese resultados
                echo mysql_error();;
            }
            mysql_close($this->link);
        }

    }
?>
