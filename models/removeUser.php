<?php

    include ("conexion.php");

    $user     = $_GET['name'];
    $id      = $_GET['id'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeUser($user, $id);

?>
