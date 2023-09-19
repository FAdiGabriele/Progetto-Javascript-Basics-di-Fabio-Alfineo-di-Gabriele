import * as utils from './utils.js';

let increaseFunction = function increaseCounter() {
    utils.increaseCounter();
    updateFunction();
}

let decreaseFunction = function decreaseCounter() {
    if (utils.getCounterValue() > 0) {
        utils.decreaseCounter();
        updateFunction();
    } else {
        alert("Non si può avere un numero negativo di persone!")
    }
}

let resetFunction = function resetCounter() {
    utils.resetCounter();
    updateFunction();
}

let updateFunction = function updateCounterscreen() {
    let counterValue = utils.getCounterValue()
    screen.innerHTML = counterValue;
    screen.style.color = utils.checkCounterColor(counterValue, utils.getMaxPeople());
}

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const screen = document.getElementById("screen");

initMaxPeople();

addButton.addEventListener("click", increaseFunction);
subtractButton.addEventListener("click", decreaseFunction);
resetButton.addEventListener("click", resetFunction); 

function initMaxPeople(){
    utils.setMaxPeople(prompt("lollissimo fra"));
    updateFunction();
}