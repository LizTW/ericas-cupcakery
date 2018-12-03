function cupcakeWarning() {
  alert("Warning!  Most Delicious Cupcakes!");
}

function tasteyCupcake() {
  var popup = document.getElementById("chocolate");
  popup.classList.toggle("show");
}
function tasteyCupcake2() {
  var popup = document.getElementById("vanilla");
  popup.classList.toggle("show");
}
function tasteyCupcake3() {
  var popup = document.getElementById("peppermint");
  popup.classList.toggle("show");
}

$(document).ready(function() {
  $(".checkout").on("keyup", ".quantity", function() {
    var price = +$(".price").data("price");
    var quantity = +$(this).val();
    $("#total").text("$" + price * quantity);
  })
})
  