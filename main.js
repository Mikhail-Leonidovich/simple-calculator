const calcInp = document.querySelector(".calculator__input");

const allButtons = document.querySelectorAll("button");

const calcPlus = document.querySelector(".calculator__plus");
const calcMinus = document.querySelector(".calculator__minus");
const calcMulti = document.querySelector(".calculator__multiplication");
const calcDegree = document.querySelector(".calculator__degree");
const calcEqually = document.querySelector(".calculator__equally");

const calcSeven = document.querySelector(".calculator__seven");
const calcEight = document.querySelector(".calculator__eight");
const calcNine = document.querySelector(".calculator__nine");
const calcFour = document.querySelector(".calculator__four");
const calcFive = document.querySelector(".calculator__five");
const calcSix = document.querySelector(".calculator__six");
const calcOne = document.querySelector(".calculator__one");
const calcTwo = document.querySelector(".calculator__two");
const calcThree = document.querySelector(".calculator__three");
const calcZero = document.querySelector(".calculator__zero");
const calcComma = document.querySelector(".calculator__comma");
const calcClear = document.querySelector(".calculator__clear");

allButtons.forEach((item) => {
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