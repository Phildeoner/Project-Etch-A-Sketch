//Set button to capture grid size
const gridSizeBtn = document.getElementById("gridSizeBtn");
gridSizeBtn.addEventListener("click", generateGrid);

//To capture the grid-container id in html div
const gridContainer = document.getElementById("grid-container");

//A generateGrid function to accept input for grid size
function generateGrid() {
  let gridSize = prompt("Input Your Desired Grid Size:");
  gridSize = parseInt(gridSize);
  if(gridSize > 100){
    alert("The maximum grid size is 100, please enter a valid size.");
    return;
  };
  //set gridConatiner.innerHTML to an empty string to clear existing grid and create new on input
  gridContainer.innerHTML = '';


//Create a loop to create grids
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let boxes = document.createElement("div");
      boxes.classList.add('gridBoxes');
      gridContainer.appendChild(boxes);
    }
  } 
}


//A function to  to draw a pixelated trail on the canvas
let canvas = createCanvas(100,100);
canvas.mousePressed(drawPixel);

function drawPixel() {
  strokeWeight(4);
  point(mouseX, mouseY);
}
  