<?php
    //Include class conexion
    include ("conexion.php");

    //Instance
    $A = new Conexion("WebProject","localhost","root"," ");
    $A -> connectDB();//Call conection
    $usersList = $A -> getUsers();
    echo $usersList;
 ?>
<!DOCTYPE html>
<html>
    <head>
        <meta lang="es">
        <meta charset="utf-8">
        <link rel="stylesheet" href="./public/css/home.css">

        <!-- reactJS -->
        <script src="./public/js/reactJS/react.js"></script>
        <script src="./public/js/reactJS/react-dom.js"></script>

        <title>Simulation OS</title>
    </head>
    <body>
        <section id="tool-bar"></section>
        <section class="parent-box">
            <section id="menu"></section>
        </section>
        <script src="./build/formulary.js"></script>
        <script type="text/javascript">
            loadForm(
                <?php echo $usersList ?>
            );
        </script>


    </body>
</html>
