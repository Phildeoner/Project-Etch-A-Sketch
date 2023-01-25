//DOM elements from html and variables
const container = document.querySelector("#grid-container");
const gridSize = document.querySelector(".gridSize");
let size = gridSize.value;
const color = document.querySelector(".color");
const reset = document.querySelector("#reset");
let draw = false;
const text = document.querySelector(".text");

//A generateGrid function to accept input for grid size
function generateGrid(size) {
  if (size <= 50){
    container.style.setProperty("--size", size)
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("gridBoxes");
      div.addEventListener("mouseover", function(){
        if(!draw) return;
        div.style.backgroundColor = color.value;
    });
    div.addEventListener("mousedown", function(){
      div.style.backgroundColor = color.value;
    });
      container.appendChild(div);
    }
  } else {
    gridSize.classList.add("error");
    setTimeout(() => {
      // remove error class after 1 sec
      gridSize.classList.remove("error");
    }, 1000);
  }
}
  //set gridConatiner.innerHTML to an empty string to clear existing grid and create new on input
  gridContainer.innerHTML = '';


//Create a loop to create grids
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let boxes = document.createElement("div");
      boxes.classList.add('gridBoxes');
      boxes.addEventListener("mouseover",function(){
        boxes.style.backgroundColor = "red";
      });
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
  