const point = document.getElementById(".");const cancel = document.getElementById("AC");
const add = document.getElementById("+");const minus = document.getElementById("-");
const times = document.getElementById("*");const divide = document.getElementById("/");
const equals = document.getElementById("equals");const display = document.getElementById("display");

let storeLength = 0;
let toStore = [];
let calculateLength = 0;
let toCalculate = [];

const addNumber = (num) => {
    if (display.textContent == "0") {display.textContent = num}
    else {display.textContent = display.textContent + num};
    toStore[storeLength] = num;
    storeLength += 1;
}

const storeNumber = (symbol) => {
    display.textContent = display.textContent + symbol;
    toCalculate[calculateLength] = Number(toStore.reduce((acc, value) => `${acc}${value}`));
    calculateLength += 1;
    storeLength = 0; toStore = [];
    if (symbol === "+"){toCalculate[calculateLength] = "+"}
    else if (symbol === "-"){toCalculate[calculateLength] = "-"}
    else if (symbol === "÷"){toCalculate[calculateLength] = "/"}
    else if (symbol === "x"){toCalculate[calculateLength] = "*"}
    else {toCalculate[calculateLength] = "="};
    calculateLength += 1;
}

const calculation = () => {
    storeNumber("=");
    for (i=1; i<toCalculate.length; i++){
        if (toCalculate[i] == "*"){
            toCalculate[i-1] *= toCalculate[i+1];
            toCalculate.splice(i, 2);
        }else if (toCalculate[i] == "/"){
            toCalculate[i-1] /= toCalculate[i+1];
            toCalculate.splice(i, 2);
        }
    }
    while (toCalculate[1]!="="){
        if (toCalculate[1] == "+"){toCalculate[0] += toCalculate[2]}
        else if (toCalculate[1] == "-"){toCalculate[0] -= toCalculate[2]}
        toCalculate.splice(1, 2);
    }
    let result = toCalculate[0];
    toCalculate.pop();
    toStore[0]=result;
    display.textContent = result;
}

const numbers = document.getElementsByClassName("number")
for (let number = 0; number<numbers.length; number++){
    numbers[number].addEventListener("click",(event) => {
        console.log("beans");
        addNumber(event.target.innerHTML)
    });     
}

cancel.addEventListener("click",() =>{
    display.textContent = " ";
    storeLength = 0;
    toStore = [];
    calculateLength = 0;
    toCalculate = [];
});

point.addEventListener("click",() =>{
    display.textContent = display.textContent + ".";
    toStore[storeLength] = ".";
    storeLength += 1;
});
add.addEventListener("click",() => {storeNumber("+")});
minus.addEventListener("click",() => {storeNumber("-")});
times.addEventListener("click",() => {storeNumber("x")});
divide.addEventListener("click",() => {storeNumber("÷")});
equals.addEventListener("click",() =>{calculation()});