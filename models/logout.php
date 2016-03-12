<?php
/*
================================================================================
    REQUEST OF DISCONECT
    -> GET VALUES WITH AJAX
    author : ELihu Alejandro Cruz Albores
    version : 1.0.4
================================================================================
*/
    session_start();//Start session to close

    session_unset();
    session_destroy();
    echo "Session was closed";
 ?>
