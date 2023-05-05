//Canvas variables
var newPixel = document.createElement("div");
var grid = document.getElementById("gridLayer");
var currentColor = document.getElementById("currentColor")
newPixel.setAttribute("class", "pixel")
//variables 
var size = 16;
var color = "black";
var hold = false;

let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

currentColor.style.backgroundColor = color;
drawPixels(size);

function clearGrid(){
    grid.innerHTML = "";
}
//draws a CSS grid that is resolution x resolution large
function drawPixels(resolution){
    size = resolution;
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${resolution}, 1fr)`;
    for(let i = 0; i < resolution*resolution; i++){
        var newPixel = document.createElement("div");
        newPixel.setAttribute("class", "pixel");
        newPixel.addEventListener("mousedown", fillPixel);
        newPixel.addEventListener("mouseover", maybeFillPixel)
        grid.appendChild(newPixel);
    }
}
function maybeFillPixel(e){
    if(mouseDown === true){
        e.target.style.backgroundColor = color;
    }
}
function fillPixel(e){
    e.target.style.backgroundColor = color;
}



//AI code to implement a color wheel - CRAZY
// Get the canvas element
var canvas = document.getElementById("color-wheel");

// Get the 2D context of the canvas element
var context = canvas.getContext("2d");

// Calculate the center of the canvas element
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

// Set the background of the canvas element to half white and half black
context.fillStyle = "white";
context.fillRect(0, 0, centerX, canvas.height);

context.fillStyle = "black";
context.fillRect(centerX, 0, centerX, canvas.height);

// Define a function to draw the color wheel
function drawColorWheel() {
  var numColors = 360;
  var wedgeAngle = (2 * Math.PI) / numColors;
  var wedgeRadius = Math.min(centerX, centerY);

  for (var i = 0; i < numColors; i++) {
    var hue = i;
    var saturation = 100;
    var lightness = 50;

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(
      centerX,
      centerY,
      wedgeRadius,
      i * wedgeAngle,
      (i + 1) * wedgeAngle
    );
    context.closePath();

    context.fillStyle = "hsl(" + hue + "," + saturation + "%," + lightness + "%)";
    context.fill();
  }
}

// Call the drawColorWheel function to draw the color wheel
drawColorWheel();

// Add an event listener to the canvas element to detect clicks
canvas.addEventListener("click", function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  var pixel = context.getImageData(x, y, 1, 1);
    color = "rgb(" + pixel.data[0] + "," + pixel.data[1] + "," + pixel.data[2] + ")";
    currentColor.style.backgroundColor = color;
});
