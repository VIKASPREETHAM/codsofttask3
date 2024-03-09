let expression = "";
let screen = document.getElementById("screen");
let expressionDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");

function clearScreen() {
  expression = "";
  updateScreen();
}

function appendCharacter(char) {
  expression += char;
  updateScreen();
}

function appendOperator(operator) {
  if (expression !== "" && !isOperator(expression[expression.length - 1])) {
    expression += operator;
    updateScreen();
  }
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result.toString();
    updateScreen();
  } catch (error) {
    expression = "Error";
    updateScreen();
  }
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function updateScreen() {
  expressionDisplay.textContent = expression;
  resultDisplay.textContent = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearScreen();
  } else if (event.key === ".") {
    appendOperator(".");
  } else if (/[0-9]/.test(event.key)) {
    appendCharacter(event.key);
  } else if (isOperator(event.key)) {
    appendOperator(event.key);
  }
});
