<?php
/*
================================================================================
    REQUEST OF REMOVE USERS
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/

    include ("../NoteDB.php");

    $id          = $_POST['id'];
    $key_note    = $_POST['key_note'];

    //Instance
    $Conection = new NoteDB("WebProject","localhost","root"," ");
    $data = $Conection -> removeNote($id,$key_note);

?>
