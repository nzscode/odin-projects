let digitBtns = document.querySelectorAll(".digit");
let clearBtn = document.getElementById("clear");
let operatorBtns = document.querySelectorAll(".operator");
let display = document.getElementById("bigDisplay");
let calculationResult = document.getElementById("calculationResult");
let equalBtn = document.getElementById("equal");
let lastOperation = "";
let displayValue = "";
let num1 = "";
let num2 = "";
let result = "";

function getButton() {
    for (let i = 0; i < digitBtns.length; i++) {
        const digitBtn = digitBtns[i];
        const buttonText = digitBtn.textContent;
        // console.log(buttonText);
        digitBtn.addEventListener("click", () => {
            if (displayValue.length <= 9 && digitBtn.innerText != 0) {
                displayValue += digitBtn.innerText;
                display.textContent = displayValue;
            } else if (
                digitBtn.innerText == 0 &&
                displayValue.length >= 1 &&
                displayValue.length <= 9
            ) {
                displayValue += digitBtn.innerText;
                display.textContent = displayValue;
                // console.log(getButton[buttonText]);
            }
        });
    }
}

function clearEverything() {
    clearBtn.addEventListener("click", () => {
        clear();
    });
}

function operation() {
    for (let i = 0; i < operatorBtns.length; i++) {
        const operator = operatorBtns[i];
        operator.addEventListener("click", () => {
            if (operator.innerText == "+") {
                lastOperation = "+";
                if (num1.length == 0) {
                    num1 = displayValue;
                    num2 = "";
                    displayValue = "";
                    display.textContent = "0";
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " +";
                } else {
                    num2 = displayValue;
                    result = add(parseInt(num1), parseInt(num2));
                    num2 = "";
                    displayValue = "";
                    display.textContent = "0";
                    num1 = result.toString();
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " +";
                }
            } else if (operator.innerText == "-") {
                lastOperation = "-";
                if (num1.length == 0) {
                    num1 = displayValue;
                    num2 = "";
                    displayValue = "";
                    display.textContent = "0";
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " -";
                } else {
                    num2 = displayValue;
                    result = subtract(parseInt(num1), parseInt(num2));
                    num2 = "";
                    displayValue = "";
                    display.textContent = "0";
                    num1 = result.toString();
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " -";
                }
            } else if (operator.innerText == "*") {
                lastOperation = "*";
                if (num1.length == 0 && displayValue != "0") {
                    num1 = displayValue;
                    displayValue = "";
                    num2 = "";
                    display.textContent = "0";
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " x";
                } else {
                    num2 = displayValue;
                    result = multiply(parseInt(num1), parseInt(num2));
                    displayValue = "";
                    num2 = "";
                    display.textContent = "0";
                    num1 = result.toString();
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " x";
                }
            } else if (operator.innerText == "/") {
                lastOperation = "/";
                if (num1.length == 0 && displayValue != "0") {
                    num1 = displayValue;
                    displayValue = "";
                    num2 = "";
                    display.textContent = "0";
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " /";
                } else {
                    num2 = displayValue;
                    result = divide(parseInt(num1), parseInt(num2)).toFixed(2);
                    displayValue = "";
                    num2 = "";
                    display.textContent = "0";
                    num1 = result.toString();
                    calculationResult.style.color = "black";
                    calculationResult.textContent = num1 + " /";
                }
            }
        });
    }
}

function printResult() {
    equalBtn.addEventListener("click", () => {
        if (num1 > 0) {
            if (lastOperation == "+") {
                num2 = displayValue;
                display.textContent = add(parseInt(num1), parseInt(num2));
                calculationResult.textContent = num1 + " + " + num2;
            } else if (lastOperation == "-") {
                num2 = displayValue;
                display.textContent = subtract(parseInt(num1), parseInt(num2));
                calculationResult.textContent = num1 + " - " + num2;
            } else if (lastOperation == "*") {
                if (displayValue == "0") {
                    num2 = displayValue;
                    display.textContent = multiply(
                        parseInt(num1),
                        parseInt(num2)
                    );
                    calculationResult.textContent = num1 + " * " + num2;
                } else {
                    num2 = displayValue;
                    display.textContent = multiply(
                        parseInt(num1),
                        parseInt(num2)
                    );
                    calculationResult.textContent = num1 + " * " + num2;
                }
            } else if (lastOperation == "/") {
                if (displayValue == "0") {
                    num2 = 1;
                    display.textContent = divide(
                        parseInt(num1),
                        parseInt(num2)
                    );
                    calculationResult.textContent = num1 + " / " + num2;
                } else {
                    num2 = displayValue;
                    display.textContent = divide(
                        parseInt(num1),
                        parseInt(num2)
                    );
                    calculationResult.textContent = num1 + " + " + num2;
                }
            }
        }
    });
}
printResult();
getButton();
clearEverything();
operation();
function printToConsole(a) {
    console.log(a.innerText);
}
function add(a, b) {
    // console.log(a + b);
    return a + b;
}

function subtract(a, b) {
    console.log(a - b);
    return a - b;
}

function multiply(a, b) {
    console.log(a * b);
    return a * b;
}

function divide(a, b) {
    console.log(a / b);
    return a / b;
}

function clear() {
    displayValue = "";
    display.textContent = "0";
    lastOperation = "";
    num1 = "";
    num2 = "";
    result = "";
    calculationResult.textContent = "";
    calculationResult.style.color = "transparent";
}
