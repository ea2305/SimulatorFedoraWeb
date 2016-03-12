<?php
/*
================================================================================
    REQUEST OF RETURN USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    //Include class conexion
    include ("conexion.php");

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $usersList = $Conection -> getUsers();
    echo $usersList;
 ?>
