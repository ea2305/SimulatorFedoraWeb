<?php
/*
================================================================================
    REQUEST OF REMOVE USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/

    include ("../DB_User.php");

    $user     = $_GET['name'];
    $id      = $_GET['id'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeUser($user, $id);

?>
