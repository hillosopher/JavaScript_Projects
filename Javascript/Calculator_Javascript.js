"use strict";

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitSecondOperand: false,
  operator: null,
};

// const calculator = {
//     displayValue: "5",
//     firstOperand: 85.3,
//     waitSecondOperand: false,
//     operator: +,
//   };

function inputDigit(digit) {
  const { displayValue, waitSecondOperand } = calculator;
  if (waitSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitSecondOperand === true) return;
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const valueOfInput = parseFloat(displayValue);
  if (operator && calculator.waitSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }
  if (firstOperand == null) {
    calculator.firstOperand = valueOfInput;
  } else if (operator) {
    const valueNow = firstOperand || 0;
    let result = performCalculation[operator](valueNow, valueOfInput);
    result = Number(result).toFixed(9);
    result = (result * 1).toString();
    calculator.displayValue = parseFloat(result);
    calculator.firstOperand = parseFloat(result);
  }
  calculator.waitSecondOperand = true;
  calculator.operator = nextOperator;
}

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand,
};

function calculatorReset() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (calcKey) => {
  const { target } = calcKey;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("all-clear")) {
    calculatorReset();
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});
