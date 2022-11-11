function cart(id) {
  var qty = 1;
  var ele = document.getElementById(id);
  var name = ele.querySelector(".shop-item-name").innerText;
  var description = ele.querySelector(".shop-item-description").innerText;
  var image = ele.querySelector(".shop-item-image img").src;
  var style = ele.querySelector(".shop-item-image").getAttribute("style");
  var price = ele.querySelector(".shop-item-price").innerText;

  console.log(ele);
  $.ajax({
                  url: 'Controller/Cart.php',
                  type: 'POST',
                  data: {
                      id: id,
                      qty: qty,
                      image: image,
                      style: style,
                      name: name,
                      description: description,
                      price: price,
                      priceTotal: price
                  },
                  success: function(data){                   
                     console.log(data);
                     $('#card-product').html(data);
                  }
  })
 
  document.getElementById("myButton"+id).classList.add("inactive");
  document.getElementById("myButton"+id).innerHTML = "<div class='shop-item-button-cover-check-icon'></div>";
 

}

var qty = 1;
function increment(id) {
  qty += 1;

  var ele = document.getElementById(id);
  var name = ele.querySelector(".shop-item-name").innerText;
  var description = ele.querySelector(".shop-item-description").innerText;
  var image = ele.querySelector(".shop-item-image img").src;
  var style = ele.querySelector(".shop-item-image").getAttribute("style");
  var price = ele.querySelector(".shop-item-price").innerText;
  var priceTotal = 0;
  priceTotal = price*qty;

  $.ajax({
    url: 'Controller/Cart.php',
    type: 'POST',
    data: {
        id: id,
        qty: qty,
        image: image,
        style: style,
        name: name,
        description: description,
        price: price,
        priceTotal: priceTotal
      },
    success: function(data){                   
       console.log(data);
       $('#card-product').html(data);
      }
  })

}

function descrement(id) {
  qty -= 1;

  var ele = document.getElementById(id);
  var name = ele.querySelector(".shop-item-name").innerText;
  var description = ele.querySelector(".shop-item-description").innerText;
  var image = ele.querySelector(".shop-item-image img").src;
  var style = ele.querySelector(".shop-item-image").getAttribute("style");
  var price = ele.querySelector(".shop-item-price").innerText;
  var priceTotal = 0;
  priceTotal = price*qty;

  $.ajax({
    url: 'Controller/Cart.php',
    type: 'POST',
    data: {
        id: id,
        qty: qty,
        image: image,
        style: style,
        name: name,
        description: description,
        price: price,
        priceTotal: priceTotal
      },
    success: function(data){                   
       console.log(data);
       $('#card-product').html(data);
      }
  })

  
}

function deleteItem() {
  document.location = 'Delete.php';
  document.getElementById("myButton").remove('shop-item-button inactive');
  document.getElementById("myButton").classList.add("shop-item-button");
}

