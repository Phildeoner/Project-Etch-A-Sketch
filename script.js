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


//resetBoard Function to clear board to default
function resetBoard () {
  container.innerHTML = "";
  generateGrid(size);
};
reset.addEventListener("click", resetBoard);

gridSize.addEventListener("keyup", function() {
  size = gridSize.value;
  resetBoard();
})

window.addEventListener("mousedown", function(){
  draw = true;
});
window.addEventListener("mouseup", function(){
  draw = false;
});

generateGrid(size);
  