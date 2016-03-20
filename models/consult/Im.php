<?php
/*
================================================================================
    REQUEST OF GET VALUES
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    //Include class conexion
    include ("../UserDB.php");

    //Instance
    $Conection = new UserDB("WebProject","localhost","root"," ");
    $usersList = $Conection -> getCurrentUser();
 ?>
