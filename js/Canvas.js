//Canvas variables
var newPixel = document.createElement("div");
var grid = document.getElementById("gridLayer");
var currentColor = document.getElementById("currentColor")
newPixel.setAttribute("class", "pixel")
//variables 
var size = 16;
var color = "black";

currentColor.style.backgroundColor = color;
drawPixels(size);


function eraserTime(){
    color = "white";
    currentColor.style.backgroundColor = color;
}
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
        newPixel.addEventListener("click", fillPixel);
        grid.appendChild(newPixel);
    }
}

function fillPixel(e){
    console.log("colored pixel")
    e.target.style.backgroundColor = color;
}