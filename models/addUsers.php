<?php

    include ("conexion.php");

    $user     = $_POST['name'];
    $password = $_POST['password'];
    $email    = $_POST['email'];
    $state    = $_POST['state'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> addUser($user, $password, $email, $state);

?>
