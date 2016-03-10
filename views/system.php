<!--
    Simulation of OS Fedora, implementation of some functions
    author : Elihu Alejandro Cruz Albores
    version : 1.0.3
 -->
 <?php //Vaidation of sesion is active
     session_start();
     //If session doesn't exist
     if (!isset($_SESSION['name'])){
         header("Location: ../index.php");
         exit();
     }else {
         //Logeadno correctamente
     }
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>SimulatorOS</title>
        <?php
            //Import and link elements
            require "_header.php";
         ?>

    </head>
    <body >
        <!-- Container of react component -->
        <div id="react">
            <div class="container-info">
                <h3>Manage Users</h1>
                <button type="button" name="add">Add user</button>
                <button type="button" name="remove">Remove user</button>
                <button type="button" name="edit">Edit user</button>
            </div>
        </div>

        <!-- Bar of navegation -->
        <nav class="bar">
            <div class="activity-bar">
                <span>Activities</span>
            </div>
            <div class="action-bar">
                <span id="clock">Thuesday 28 January 2016</span>
            </div>
            <div class="utilities-bar">
                <span class="glyphicon glyphicon-volume-up"></span>
                <span class="glyphicon glyphicon-signal"></span>
                <span class="glyphicon glyphicon-envelope"></span>
                <span class="glyphicon glyphicon-user"></span>
            </div>
        </nav>

        <!-- desktop box -->
        <article class="desktop">
            <div class="efect-corner">
                <div class="left-corn"></div>
                <div class="center-corn"></div>
                <div class="right-corn"></div>
            </div>
        </article>

        <!-- menu box -->
        <div class="modal-window">
            <div class="efect-corner">
                <div class="left-corn"></div>
                <div class="center-corn"></div>
                <div class="right-corn"></div>
            </div>
            <div class="header-box">
                <div class="info-box">
                    Fedora 23
                </div>
                <div class="search-box">
                    <input id="search-box" type="text" value=" Type to search...">
                    <div class="right-search"><span class="glyphicon glyphicon-search"></span></div>
                </div>
            </div>
            <nav class="body-box">
                <div class="items-box">
                </div>
                <div class="applications-box">
                </div>
                <div class="windows-box">
                </div>
            </nav>
            <footer class="footer-box">
                <div class="select-box"></div>
            </footer>
        </div>
        <input type="text" name="name" value="">
    </body>
</html>
