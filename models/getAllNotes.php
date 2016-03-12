<?php
/*
================================================================================
    REQUEST OF RETURN ALL NOTES
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("conexion.php");

    $id = $_GET['id'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    echo $Conection -> getAllNotes($id);

?>
