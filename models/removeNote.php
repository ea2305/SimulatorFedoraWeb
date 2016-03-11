<?php

    include ("conexion.php");

    $id          = $_POST['id'];
    $key_note    = $_POST['key_note'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeNote($id,$key_note);

?>
