const keys = document.querySelectorAll(".key");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");
const equationWrapper = document.querySelector(".equation-wrapper");
const resultWrapper = document.querySelector(".result-wrapper");

let currentResult = 0;
let currentNum = 0;

function render(div, element) {
  div.textContent = element.toString();
}

function add() {
  currentNum += currentResult;
  currentResult = 0;

  render(resultWrapper, currentNum);
  render(equationWrapper, currentNum + " + ");
}

/*
When clicking on one of the number keys,
assign the value to the variable `currentNum`
and render it on the result screen
*/
for (const key of numberKeys) {
  key.addEventListener("click", () => {
    currentResult *= 10;
    currentResult += parseInt(key.textContent);
    resultWrapper.textContent = currentResult;
  });
}

/*
When clicking on any of the operator keys
(eg. +, -, x, /) call a function to handle
the operation
*/
for (const operatorKey of operatorKeys) {
  operatorKey.addEventListener("click", () => {
    if (operatorKey.id === "add") add();
  });
}
