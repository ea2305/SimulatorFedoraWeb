<?php
/*
================================================================================
    REQUEST OF EDIT USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("../UserDB.php");

    $id     = $_POST['id'];
    $user     = $_POST['name'];
    $password = $_POST['password'];
    $email    = $_POST['email'];
    $state    = $_POST['state'];

    //Instance
    $Conection = new UserDB("WebProject","localhost","root"," ");
    $data = $Conection -> editUser($user, $password, $email, $state,$id);

?>
