let gridContainer = document.querySelector(".gridContainer");

let btnBlack = document.getElementById("black");
let btnRainbow = document.getElementById("rainbow");
let btnShading = document.getElementById("shading");
let btnColorPicker = document.getElementById("colorpicker");
let btnErase = document.getElementById("erase");
let btnResize = document.getElementById("resize");
let btnClear = document.getElementById("clear");

function creatGrids(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const div = document.createElement("div");
    gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gridContainer.appendChild(div).classList.add("cell");
  }
}
creatGrids(16, 16);

function blackColor() {
  const cells = gridContainer.querySelectorAll(".cell");
  btnBlack.addEventListener("click", function () {
    cells.forEach((cell) =>
      cell.addEventListener("mouseover", function () {
        this.style.background = "black";
      })
    );
  });
}
blackColor();

function rainbowColors() {
  const cells = gridContainer.querySelectorAll(".cell");

  btnRainbow.addEventListener("click", () => {
    cells.forEach((cell) =>
      cell.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        const RGB = `rgb(${R},${G},${B})`;
        cell.style.background = RGB;
      })
    );
  });
}
rainbowColors();

function colorpicker() {
  const cells = gridContainer.querySelectorAll(".cell");
  btnColorPicker.addEventListener("click", () => {
    cells.forEach((cell) =>
      cell.addEventListener("mouseover", () => {
        let color = btnColorPicker.value;
        cell.style.background = color;
      })
    );
  });
}
colorpicker();

/* [Erase]  */

function changeColor(color) {
  const cells = gridContainer.querySelectorAll(".cell");
  btnErase.addEventListener("click", () => {
    cells.forEach((cell) =>
      cell.addEventListener("mouseover", () => {
        cell.style.background = "white";
      })
    );
  });
}
changeColor();

function reSize() {
  btnResize.addEventListener("click", () => {
    let user = prompt("What size you want your grid to be?");
    gridContainer.innerHTML = "";
    if (user === null || user < 1) {
      creatGrids(16, 16);
      colorpicker();
      rainbowColors();
      blackColor();
      changeColor();
    } else {
      creatGrids(user, user);
      colorpicker();
      rainbowColors();
      blackColor();
      changeColor();
    
      
    }
  });
}
reSize();

btnClear.addEventListener("click", function (e) {
  location.reload();
  return false;
});
