<?php
    session_start();
    //If session doesn't exist
    if (!isset($_SESSION['name'])){
        echo "false";
    }else {
        //Logeado correctamente
        echo "true";
    }
 ?>
