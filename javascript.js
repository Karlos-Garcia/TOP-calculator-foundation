const acButton = document.querySelector(".ac");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const subtractButton = document.querySelector(".subtract");
const addButton = document.querySelector(".add");
const equalButton = document.querySelector(".equal");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const zeroButton = document.querySelector(".zero");
const backButton = document.querySelector(".back");


let leftNumber = "";
let rightNumber = "";
let operator;
let finalNumber;

const displayContainer = document.querySelector(".display");
let leftDisplay = document.querySelector(".leftDisplay");
let operatorDisplay = document.querySelector(".operatorDisplay");
let rightDisplay = document.querySelector(".rightDisplay");


acButton.addEventListener("click", () => {
    console.log(typeof leftNumber);
    leftNumber = ``;
    leftDisplay.textContent = leftNumber;
    rightNumber = ``;
    rightDisplay.textContent = rightNumber;
    operator = ``;
    operatorDisplay.textContent = operator;
})
divideButton.addEventListener("click", () => {
    if (leftNumber == "") {
        return
    }
    else if (leftNumber) {
        operator = `/`;
        operatorDisplay.textContent = "/"
    }
})
multiplyButton.addEventListener("click", () => {
    if (leftNumber == "") {
        return
    }
    else if (leftNumber) {
        operator = `*`;
        operatorDisplay.textContent = "*"
    }
})
subtractButton.addEventListener("click", () => {
    if (leftNumber == "") {
        return
    }
    else if (leftNumber) {
        operator = `-`;
        operatorDisplay.textContent = "-"
    }
})
addButton.addEventListener("click", () => {
    if (leftNumber == "") {
        return
    }
    else if (leftNumber) {
        operator = `+`;
        operatorDisplay.textContent = "+"
    }
})

equalButton.addEventListener("click", () => {
    let leftNumbered = Number(leftNumber);
    let rightNumbered = Number(rightNumber);
    if (operator == `+`) {
        finalNumber = leftNumbered + rightNumbered;
        leftNumber = finalNumber.toString();
        leftDisplay.textContent = leftNumber;
        rightNumber = ``;
        rightDisplay.textContent = rightNumber;
        operator = ``;
        operatorDisplay.textContent = operator;
        return finalNumber;
    }
    else if (operator == `-`) {
        finalNumber = leftNumbered - rightNumbered;
        leftNumber = finalNumber.toString();
        leftDisplay.textContent = leftNumber;
        rightNumber = ``;
        rightDisplay.textContent = rightNumber;
        operator = ``;
        operatorDisplay.textContent = operator;
        return finalNumber;
    }
    else if (operator == `*`) {
        finalNumber = leftNumbered * rightNumbered;
        leftNumber = finalNumber.toString();
        leftDisplay.textContent = leftNumber;
        rightNumber = ``;
        rightDisplay.textContent = rightNumber;
        operator = ``;
        operatorDisplay.textContent = operator;
        return finalNumber;
    }
    else if (operator == `/`) {
        finalNumber = leftNumbered / rightNumbered;
        leftNumber = finalNumber.toString();
        leftDisplay.textContent = leftNumber;
        rightNumber = ``;
        rightDisplay.textContent = rightNumber;
        operator = ``;
        operatorDisplay.textContent = operator;
        return finalNumber;
    }
})

oneButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 1;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 1;
        rightDisplay.textContent = rightNumber;
    }   
})
twoButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 2;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 2;
        rightDisplay.textContent = rightNumber;
    }   
})
threeButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 3;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 3;
        rightDisplay.textContent = rightNumber;
    }   
})
fourButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 4;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 4;
        rightDisplay.textContent = rightNumber;
    }   
})
fiveButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 5;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 5;
        rightDisplay.textContent = rightNumber;
    }   
})
sixButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 6;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 6;
        rightDisplay.textContent = rightNumber;
    }   
})
sevenButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 7;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 7;
        rightDisplay.textContent = rightNumber;
    }   
})
eightButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 8;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 8;
        rightDisplay.textContent = rightNumber;
    }   
})
nineButton.addEventListener("click", () => {
    if (!operator) {
        leftNumber += 9;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator) {
        rightNumber += 9;
        rightDisplay.textContent = rightNumber;
    }   
})
zeroButton.addEventListener("click", () => {
    if (!operator && !leftNumber) {
        return;
    }
    else if (!operator) {
        leftNumber += 0;
        leftDisplay.textContent = leftNumber;
    }
    else if (operator && !rightNumber) {
        return;
    }
    else if (operator) {
        rightNumber += 0;
        rightDisplay.textContent = rightNumber;
    }   
})
