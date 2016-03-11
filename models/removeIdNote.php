<?php

    include ("conexion.php");

    $id = $_POST['id'];
    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> removeIdNote($id);

?>
