<?php
/*
================================================================================
    REQUEST OF ADD NOTES
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("../NoteDB.php");

    $id     = $_POST['id'];
    $text = $_POST['text'];
    $key_note    = $_POST['key_note'];

    //Instance
    $Conection = new NoteDB("WebProject","localhost","root"," ");
    $data = $Conection -> addNote($id,$text,$key_note);

?>
