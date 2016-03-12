<?php
/*
================================================================================
    REQUEST OF EDIT USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/

    include ("conexion.php");

    $id = $_POST['id'];
    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeIdNote($id);

?>
