<?php

$string = file_get_contents("./app/data/shoes.json");
$arrItem = json_decode($string, true);


$xhtmlItem = '';
foreach ($arrItem as $key => $value) {
    foreach ($value as $valueItem) {
        $id = $valueItem['id'];
        $xhtmlItem .= '
        
        
        
        <div class="shop-item" id="' . $id . '">
            <div class="shop-item-image" style="background-color: ' . $valueItem['color'] . ';"><img src="' . $valueItem['image'] . '"></div>
            <div class="shop-item-name" ">' . $valueItem['name'] . '</div>
            <div class="shop-item-description">' . $valueItem['description'] . '</div>
            <div class="shop-item-bottom">
                <div class="shop-item-price">' . $valueItem['price'] . '</div>
                <div class="shop-item-button" id="myButton'.$id.'" onclick="cart(' . $id . ')" >
                        <p>ADD TO CART</p>
                </div>
            </div>
        </div>
        
        
        ';
    }
}


?>

<div class="card">
    <div class="card-top">
        <img src="./app/assets/nike.png" class="card-top-logo">
    </div>
    <div class="card-title">Our Products</div>
    <div class="card-body">
        <div class="shop-items">

            <?php echo $xhtmlItem; ?>

        </div>
    </div>
</div>