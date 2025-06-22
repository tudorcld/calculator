let currentPhase = "first";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let resultRounded = "";
let input = document.getElementById("result");

function add(firstNumber, secondNumber) {
  result = firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  result = firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  result = firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  if (
    firstNumber === 0 ||
    secondNumber === 0 ||
    (firstNumber && secondNumber === 0)
  ) {
    result = "Error. Cannot divide by 0!";
  } else {
    result = firstNumber / secondNumber;
  }
}

function operate() {
  if (firstNumber === "" && secondNumber === "" && operator === "") {
    return;
  }
  let a = parseFloat(firstNumber);
  let b = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
  }
  resultRounded = parseFloat(Math.round(result * 100) / 100);
  input.value = resultRounded;
  currentPhase = "first";
  firstNumber = resultRounded;
  secondNumber = "";
  operator = "";
  console.log(resultRounded);
}

function pop(val) {
  if (!isNaN(val) || val === ".") {
    if (currentPhase === "first") {
      firstNumber += val;
    } else if (currentPhase === "second") {
      secondNumber += val;
    }
    input.value += val;
  }
  if (val == "/" || val == "*" || val == "+" || val == "-") {
    if (secondNumber === "") {
      operator = val;
      currentPhase = "second";
      input.value += val;
    }
  }
  console.log(firstNumber, operator, secondNumber);
}

function clr() {
  input.value = "";
  console.log("clear");
  firstNumber = "";
  secondNumber = "";
  operator = "";
  currentPhase = "first";
}

function del() {
  let currentInput = input.value;
  input.value = currentInput.slice(0, -1);

  if (currentPhase === "second") {
    if (secondNumber.length > 0) {
      secondNumber = secondNumber.toString().slice(0, -1);
    } else {
      operator = "";
      currentPhase = "first";
    }
  } else if (currentPhase === "first") {
    firstNumber = firstNumber.toString().slice(0, -1);
  } else if (operator === "") {
    return;
  }
}
