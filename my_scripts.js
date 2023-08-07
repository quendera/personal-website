function myFunction(e) {
  var x = e.clientX;
  var coor = x;
  var m = setColor_mouse();
}


// Update the count down every 1 second
var myVar = setInterval(setColor, 100);
var x = document.body;


function setColor() {
  var image = document.images[0];
  image.style.filter = "hue-rotate(00deg)";
  //x.style.backgroundColor ="black";
  //document.getElementById("demo").innerHTML = document.body.style.backgroundColor;

}


function setColor_mouse() {
  var image = document.images[0];
  image.style.filter = "hue-rotate(90deg)";
  //x.style.backgroundColor = "red";
  //document.getElementById("demo").innerHTML = document.body.style.backgroundColor;

}
