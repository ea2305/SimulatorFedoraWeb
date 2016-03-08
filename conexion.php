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
                echo 'Connected successfully'.'<br>';
        }

        public function printData(){
            echo $this->db_name.'<br>';
            echo $this->route.'<br>';
            echo $this->user_db.'<br>';
            echo $this->password_db.'<br>';
        }

        public function getUsers(){
            if (!mysql_select_db($this->db_name, $this->link)) {
                echo 'No pudo seleccionar la base de datos';
                return "";
            }else{
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
                return "[" . substr($information,1) . "]";
            }
        }

    }
?>
