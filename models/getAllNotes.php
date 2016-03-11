<?php

    include ("conexion.php");

    $id = $_GET['id'];

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    echo $Conection -> getAllNotes($id);

?>
