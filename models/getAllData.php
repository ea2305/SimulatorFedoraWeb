<?php
/*
================================================================================
    REQUEST OF RETURN DATA
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("conexion.php");

    $user = $_GET['name'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    echo $Conection -> getAllData($user);

?>
