<?php
    session_start();//Start session to close

    session_unset();
    session_destroy();
    echo "Session was closed";
 ?>
