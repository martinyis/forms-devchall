//First result
//Declaring objects
const labelFoc = document.querySelector(".label__foc");
const inputFoc = document.querySelector(".typehere__foc");
const LabelRedFoc = document.querySelector(".label__red-foc");
const inputRedFoc = document.querySelector(".typehere__foc-red");
const changeColor = function (e, arry) {
  const normStyle = getComputedStyle(this[0]);
  this[1].style.color = normStyle.borderColor;
};
const labelColor = function (e, labels) {
  const clicked = this[0];
  if (e.target !== clicked) {
    this[1].style.color = "black";
  }
};

//Calling listeners
inputFoc.addEventListener("click", changeColor.bind([inputFoc, labelFoc]));
inputRedFoc.addEventListener(
  "click",
  changeColor.bind([inputRedFoc, LabelRedFoc])
);

document.addEventListener("click", labelColor.bind([inputFoc, labelFoc]));
document.addEventListener("click", labelColor.bind([inputRedFoc, LabelRedFoc]));
