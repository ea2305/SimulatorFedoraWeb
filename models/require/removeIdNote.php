<?php
/*
================================================================================
    REQUEST OF EDIT USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/

    include ("../NoteDB.php");

    $id = $_POST['id'];
    //Instance
    $Conection = new NoteDB("WebProject","localhost","root"," ");
    $data = $Conection -> removeIdNote($id);

?>
