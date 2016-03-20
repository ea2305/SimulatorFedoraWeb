<?php
/*
================================================================================
    REQUEST OF ADD USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("../UserDB.php");

    $user     = $_POST['name'];
    $password = $_POST['password'];
    $email    = $_POST['email'];
    $state    = $_POST['state'];

    //Instance
    $Conection = new UserDB("WebProject","localhost","root"," ");
    $data = $Conection -> addUser($user, $password, $email, $state);

?>
