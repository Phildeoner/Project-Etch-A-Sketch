//Set button to capture grid size
const gridSizeBtn = document.getElementById("gridSizeBtn");
gridSizeBtn.addEventListener("click", generateGrid);

//A generateGrid function to accept input for grid size
function generateGrid() {
  let gridSize = prompt("Input Your Desired Grid Size:");
  gridSize = parseInt(gridSize);

//To capture the grid-container id in html div
const gridContainer = document.getElementById("grid-container");
//Create a loop to create grids
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let square = document.createElement("div");
      square.classList.add('gridBoxes');
      gridContainer.appendChild(square);
    }
  } 
  }

  //Create an hover
  let hoverEffect = document.querySelector(".j-grid");
   hoverEffect.addEventListener("mouseover", 
    function(){
      hoverEffect.classList.add("effect");
    });
  hoverEffect.addEventListener("mouseout", 
    function(){
      hoverEffect.classList.remove("effect");
    });


//A function to  to draw a pixelated trail on the canvas
let canvas = createCanvas(100,100);
canvas.mousePressed(drawPixel);

function drawPixel() {
  strokeWeight(4);
  point(mouseX, mouseY);
}
  