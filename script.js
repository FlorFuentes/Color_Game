let colors = [];
let numOfSquares = 6;
let claseDiv = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let pickedColor;
let resetBtn = document.querySelector("#reset");
let modeBtn = document.querySelectorAll(".mode");

init();

function init() {
  selectBtns();
  setUpSquares();
  reset();
}

function selectBtns() {
  for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      numOfSquares = this.textContent === "Easy" ? 3 : 6;

      reset();
    });
  }
}
function setUpSquares() {
  for (let i = 0; i < claseDiv.length; i++) {
    claseDiv[i].addEventListener("click", function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        message.textContent = "Correcto!";
        resetBtn.textContent = "Juega de nuevo!";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        message.textContent = "Intenta otra vez";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < claseDiv.length; i++) {
    if (colors[i]) {
      claseDiv[i].style.background = colors[i];
      claseDiv[i].style.display = "block";
    } else {
      claseDiv[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  message.textContent = "";
  resetBtn.textContent = "New Colors";
}
resetBtn.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  for (let i = 0; i < claseDiv.length; i++) {
    claseDiv[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  return arr;
}
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}