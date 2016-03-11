<?php
    //Include class conexion
    include ("conexion.php");

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $usersList = $Conection -> getCurrentUser();
 ?>
