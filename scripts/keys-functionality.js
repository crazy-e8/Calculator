const keys = document.querySelectorAll(".key");
const numberKeys = document.querySelectorAll(".number");
const operatorKeys = document.querySelectorAll(".operator");
const resultWrapper = document.querySelector(".result-wrapper");
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");

/*
When clicking on one of the number keys,
assign the value to the variable `currentNum`
and render it on the result screen
*/
for (const key of numberKeys) {
  key.addEventListener("click", () => {
    resultWrapper.textContent += key.textContent;
  });
}

for (const operatorKey of operatorKeys) {
  operatorKey.addEventListener("click", () => {
    resultWrapper.textContent += operatorKey.textContent;
  });
}

equalButton.addEventListener("click", () => {
  try {
    resultWrapper.textContent = eval(resultWrapper.textContent);
  } catch {
    resultWrapper.textContent = "ERROR";
  }
});

clearButton.addEventListener("click", () => {
  resultWrapper.textContent = "";
});

deleteButton.addEventListener("click", () => {
  resultWrapper.textContent = resultWrapper.textContent.substring(
    0,
    resultWrapper.textContent.length - 1
  );
});
