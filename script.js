//Create a loop to create grids
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      let square = document.createElement("div");
      square.className = "j-grid"
      square.style.width = "30px";
      square.style.height = "30px";
      square.style.backgroundColor = "white";
      square.style.border = "1px solid black";
      square.style.display = "inline-block";
      document.getElementById("grid-container").appendChild(square);
    }
    let newLine = document.createElement("br");
    document.getElementById("grid-container").appendChild(newLine);
  }
  