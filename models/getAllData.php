<?php

    include ("conexion.php");

    $user = $_GET['name'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    echo $Conection -> getAllData($user);

?>
