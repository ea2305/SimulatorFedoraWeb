<?php

    include ("conexion.php");

    $user     = $_GET['name'];
    $img      = $_GET['img'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    echo $Conection -> getAllData($user, $img);

?>
