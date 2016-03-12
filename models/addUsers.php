<?php
/*
================================================================================
    REQUEST OF ADD USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("conexion.php");

    $user     = $_POST['name'];
    $password = $_POST['password'];
    $email    = $_POST['email'];
    $state    = $_POST['state'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> addUser($user, $password, $email, $state);

?>
