<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./app/assets/favicon.ico">
    <title>Golden Sneaker</title>

    <link href="./css/index.css" rel="stylesheet">
    <link href="./css/index1.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>
    <div class="main-content">
        <?php require 'Controller/OurProduct.php' ?>
        <div class="card" id="card-product" >
            <?php require 'Controller/Cart.php' ?> 
        </div>
       
    </div>
</body>

<script src="./js/custom1.js"></script>
<script src="./js/custom2.js"></script>
<script src="./js/cart.js"></script>

</html>