<!--
===============================================================
    Simulation of OS Fedora, implementation of some functions
    author : Elihu Alejandro Cruz Albores
    version : 1.0.2
===============================================================
 -->
<!DOCTYPE html>
<html>
    <head>
        <meta lang="es">
        <meta charset="utf-8">
        <link rel="stylesheet" href="./public/css/home.css">
        <script src="./public/js/jquery/jquery-1.12.0.min.js"></script>
        <!-- reactJS -->
        <script src="./public/js/reactJS/react.js"></script>
        <script src="./public/js/reactJS/react-dom.js"></script>

        <!-- boostrap -->
        <link rel="stylesheet" href="./public/css/bootstrap.min.css">
        <script src="./public/js/bootstrap.min.js"></script>

        <title>Simulation OS</title>
    </head>
    <!-- Auto load components -->
    <body>
        <!-- set data inside -->
        <div id="bar"></div>

        <section class="parent-box">
            <!-- Call render function with react  -->
            <section id="menu" class="render-box"></section>
        </section>

        <div class="logo-so">
            <img src="./public/img/icon/logo_fedora.png" alt="fedora" />
        </div>

        <?php require "./views/_reactLogin.php"?>


    </body>
</html>
