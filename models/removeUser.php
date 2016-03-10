<?php

    include ("conexion.php");

    $user     = $_GET['name'];
    $img      = $_GET['img'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeUser($user, $img);

?>
