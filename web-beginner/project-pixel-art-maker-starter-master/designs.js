// variables
const sizePicker = document.getElementById('sizePicker')
let height = document.getElementById('inputHeight')
let width = document.getElementById('inputWidth')
let color = document.getElementById('colorPicker')
const canvas = document.getElementById('pixelCanvas')
// var clear = document.getElementById("clearButton")

makeGrid();

// Select color input
color.addEventListener("click", function() {});

// Select size input
sizePicker.onsubmit = function(event) {
  event.preventDefault();
  resetGrid();
  makeGrid();
};

// Fill squares with selected color
function fillSquare() {
  this.setAttribute("style", `background-color: ${color.value}`);
}

// When size is submitted
function makeGrid() {
  for (let r = 0; r < height.value; r++) {
    const row = canvas.insertRow(r);
    for (let c = 0; c < width.value; c++) {
      const cell = row.insertCell(c);
      cell.addEventListener("click", fillSquare);
    }
  }
}

// Reset grid
function resetGrid() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
}

// // Clear grid
// clearButton.click = function(event) {
//   canvas.setAttribute("style",'background-color: #fff');
// }
