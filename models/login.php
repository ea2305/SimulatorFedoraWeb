<?php

    //Get user data
    $name_user = $_POST['name'];
    $pass_user = $_POST['password'];
//echo $name_user."-s-<br>";
//echo $pass_user."-e-<br>";

    include ("conexion.php");

    //Instance
    $Conection = new Conexion("WebProject","localhost","root"," ");
    $data = $Conection -> isUser($name_user, $pass_user);

    echo $data;
?>
