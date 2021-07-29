const inputCalculator = document.querySelector(".calculator__input");
const allButtons = document.querySelectorAll("button");
const allButtonsNumbers = document.querySelectorAll(".calculator__numbers button");
const allButtonsOperations = document.querySelectorAll(".calculator__operations button");

const btnCalcPlus = document.querySelector(".calculator__plus");
const btnCalcMinus = document.querySelector(".calculator__minus");
const btnCalcMulti = document.querySelector(".calculator__multiplication");
const btnCalcDegree = document.querySelector(".calculator__degree");
const btnCalcEqually = document.querySelector(".calculator__equally");

const btnCalcSeven = document.querySelector(".calculator__seven");
const btnCalcEight = document.querySelector(".calculator__eight");
const btnCalcNine = document.querySelector(".calculator__nine");
const btnCalcFour = document.querySelector(".calculator__four");
const btnCalcFive = document.querySelector(".calculator__five");
const btnCalcSix = document.querySelector(".calculator__six");
const btnCalcOne = document.querySelector(".calculator__one");
const btnCalcTwo = document.querySelector(".calculator__two");
const btnCalcThree = document.querySelector(".calculator__three");
const btnCalcZero = document.querySelector(".calculator__zero");
const btnCalcComma = document.querySelector(".calculator__comma");
const btnCalcClear = document.querySelector(".calculator__clear");

allButtons.forEach((item) => {
    item.addEventListener("click", () => {
        checkInputValue(item);
    })
    item.addEventListener("mouseover", () => {
        focusBtn(item);
        mouseDownBtn(item);
        mouseUpBtn(item);
    })
    item.addEventListener("mouseout", () => {
        focusBtn(item);
        mouseDownBtn(item);
        mouseUpBtn(item);
    })
})

const focusBtn = (elem) => {
    elem.classList.toggle("focus");
}

const mouseDownBtn = (elem) => {
    elem.addEventListener("mousedown", () => {
        elem.classList.toggle("active");
    })
}

const mouseUpBtn = (elem) => {
    elem.addEventListener("mouseup", () => {
        elem.classList.toggle("active");
    })
}

let result = +localStorage.getItem("result"); // конечный результат всех вычислений

const checkInputValue = (e) => {
    if (e.value !== "+" && e.value !== "-" && e.value !== "*" && e.value !== "/") {
        addInputNumbers(e);
    } else {
        addInputOperations(e);
    }
}

const addInputNumbers = (e) => {
    let someDate = +inputCalculator.value;
    if (!Number(someDate)) {
        inputCalculator.value = "";
    }

    let btnValue = e.value;
    inputCalculator.value += btnValue;
    localStorage.setItem("result", inputCalculator.value);
    /*  result = localStorage.getItem("result"); */
}

const addInputOperations = (e) => {
    let btnValue = e.value;
    inputCalculator.value = btnValue;
    let inetermediateResult = localStorage.getItem("result");
    if (e.value == "+") {
        result = +inetermediateResult + +result;
    } else if (e.value == "-") {
        result = +inetermediateResult - +result;
    } else if (e.value == "*") {
        result = +inetermediateResult * +result;
    } else if (e.value == "/") {
        result = +inetermediateResult / +result;
    }
    inetermediateResult = "";
    console.log(result);
}

btnCalcClear.addEventListener("click", () => {
    localStorage.removeItem("result");
    inputCalculator.value = "";

})