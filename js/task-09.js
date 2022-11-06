const body = document.body;
const btnChangeColor = body.querySelector(".change-color");
const changeEL = body.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", onClickBtnChangeColor);

function onClickBtnChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  changeEL.textContent = body.style.backgroundColor;
}
