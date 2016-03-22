<?php
/*
================================================================================
    REQUEST OF RETURN DATA
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("../UserDB.php");

    $id = $_GET['id'];

    //Instance
    $Conection = new UserDB("WebProject","localhost","root"," ");
    echo $Conection -> getAllData($id);

?>
