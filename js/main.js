import * as utils from './utils.js';

let increaseFunction = function increaseCounter() {
    utils.increaseCounter();
    updateFunction();
}

let decreaseFunction = function decreaseCounter() {
    if (utils.getCounterValue() > 0) {
        utils.decreaseCounter();
        updateFunction();
    } 
}

let resetFunction = function resetCounter() {
    utils.resetCounter();
    updateFunction();
}

let updateFunction = function updateCounterscreen() {
    let counterValue = utils.getCounterValue();
    screen.innerHTML = counterValue;
    let maxCounterValue = utils.getMaxPeople();
    screenMax.innerHTML = maxCounterValue.toString();
    screen.style.color = utils.checkCounterColor(counterValue, maxCounterValue);
}

let updateMaxValueFunction = function updateMaxValue(){
    let maxValueUpdated = parseInt(updateMaxInput.value);
    updateMaxInput.value = null;
    utils.setMaxValue(maxValueUpdated);
    screenMax.innerHTML = maxValueUpdated;
    updateFunction();
}

let updateCounterValueFunction = function updateCounterValue(){
    let counterValueUpdated = parseInt(updateCounterInput.value);
    updateCounterInput.value = null;
    utils.setCounterValue(counterValueUpdated);
    updateFunction();
}

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const screen = document.getElementById("screen");
const screenMax = document.getElementById("max_screen");
const updateMaxButton = document.getElementById("update_max");
const updateCounterButton = document.getElementById("update_counter");
const updateMaxInput = document.getElementById("update_max_value");
const updateCounterInput = document.getElementById("update_counter_value");

initApplication();

addButton.addEventListener("click", increaseFunction);
subtractButton.addEventListener("click", decreaseFunction);
resetButton.addEventListener("click", resetFunction); 
updateMaxButton.addEventListener("click", updateMaxValueFunction); 
updateCounterButton.addEventListener("click", updateCounterValueFunction); 

function initApplication(){
    updateFunction();
}
