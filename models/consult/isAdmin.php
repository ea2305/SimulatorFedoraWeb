<?php
    session_start();
    //If session doesn't exist
    if (!isset($_SESSION['name'])){
        echo "error";
    }else {
        //Include class conexion
        include ("../Conexion.php");

        //Instance
        $Conection = new Conexion("WebProject","localhost","root"," ");

        if($_SESSION['state'] == 1){
            echo $Conection -> getItemsUser("1");
        }else{
            echo $Conection -> getItemsUser("0");
        }
    }
 ?>
