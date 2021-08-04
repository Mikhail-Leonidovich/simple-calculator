const inputCalculator = document.querySelector(".calculator__input");
const allButtons = document.querySelectorAll("button");
const allButtonsNumbers = document.querySelectorAll(".calculator__numbers button");
const allButtonsOperations = document.querySelectorAll(".calculator__operations button");

const btnCalcEquil = document.querySelector(".calculator__equil");

const btnCalcClear = document.querySelector(".calculator__clear");

const handleMouseOver = (e) => {
    e.addEventListener("mouseover", () => {
        focusBtn(e);
        handleMouseDownBtn(e);
        handleMouseUpBtn(e);

    })
}

const handleMouseOut = (e) => {
    e.addEventListener("mouseout", () => {
        focusBtn(e);
        handleMouseDownBtn(e);
        handleMouseUpBtn(e);

    })
}

const handleMouseDownBtn = (e) => {
    e.addEventListener("mousedown", () => {
        e.classList.toggle("active");
    })
}

const handleMouseUpBtn = (e) => {
    e.addEventListener("mouseup", () => {
        e.classList.toggle("active");
    })
}

const focusBtn = (e) => {
    e.classList.toggle("focus");
}

allButtons.forEach((item) => {
    handleMouseOver(item);
    handleMouseOut(item);
})

const addBtnValue = (elem) => {
    if (inputCalculator.value === "0") {
        inputCalculator.value = elem;
    } else if (elem === "C") {
        inputCalculator.value = "0";
    } else {
        inputCalculator.value += elem;
    }

}

inputCalculator.addEventListener("keydown", (e) => {
    let currentKey = e.key.toLowerCase();
    let arrayOfOperations = ["*", "/", "+", "-"]

    if ((currentKey >= 0) && (currentKey <= 9) || (arrayOfOperations.includes(currentKey))) {
        e.preventDefault();
        addBtnValue(e.key);
    } else if ((currentKey >= "a" && currentKey <= "z")) {
        e.preventDefault();
    } else e.preventDefault();

})