<?php
/*
================================================================================
    REQUEST OF RETURN ALL NOTES
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    include ("../NoteDB.php");

    $id = $_GET['id'];

    //Instance
    $Conection = new NoteDB("WebProject","localhost","root"," ");
    echo $Conection -> getAllNotes($id);

?>
