<?php
/*
========================================================================
    Create conexion with Data Base.
    *Content All methods of DB logic.
    author : Elihu Alejandro Cruz Albores.
    version : 1.0.6
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
            $this->db_name     = $db_name;
            $this->route       = $route;
            $this->user_db     = $user_db;
            $this->password_db = trim($password_db," ");

        }

        //Conect to DB and select db
        public function connectDB(){
            // Conectando, seleccionando la base de datos
            $this->link = mysql_connect($this->route, $this->user_db, $this->password_db)
                or die('No se pudo conectar: ' . mysql_error());//Error conect
            $this->selectDB();// Select table
        }

        //Conect with Table of DB
        public function selectDB(){
            if (!mysql_select_db($this->db_name, $this->link)) {
                echo 'No pudo seleccionar la base de datos';
                exit;
            }
        }

        protected function isConnected(){
            $this->connectDB();//Start conection
            return (isset($this->link)) ? true : false; //return response of connection
        }

        public function getItemsUser($mode){
            $this->connectDB();
            $query = "SELECT * FROM Applications WHERE mode LIKE '$mode'";
            $res = mysql_query($query,$this->link);

            $rows = array();
            while($row = mysql_fetch_assoc($res)) {
                $rows[] = $row;
            }
            return json_encode($rows);
        }

    }
?>
