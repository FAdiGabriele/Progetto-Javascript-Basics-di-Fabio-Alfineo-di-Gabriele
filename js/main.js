import * as utils from './utils.js';

let increaseFunction = function increaseCounter() {
    utils.increaseCounter();
    addPerson(utils.getCounterValue());
    updateFunction();
}

let decreaseFunction = function decreaseCounter() {
    if (utils.getCounterValue() > 0) {
        utils.decreaseCounter();
        removePerson(false);
        updateFunction();
    }
}

let resetFunction = function resetCounter() {
    utils.resetCounter();
    removePerson(true);
    updateFunction();
}

let updateFunction = function updateCounterscreen() {
    let counterValue = utils.getCounterValue();
    let maxCounterValue = utils.getMaxPeople();
    utils.setHtmlElementValue(screen, counterValue);
    utils.setHtmlElementValue(screenMax, maxCounterValue.toString());
    screen.style.color = utils.checkCounterColor(counterValue, maxCounterValue);
}

let updateMaxValueFunction = function updateMaxValue() {
    let maxValueUpdated = parseInt(updateMaxInput.value);
    utils.setMaxValue(maxValueUpdated);
    updatePersonDisplay(utils.getCounterValue());
    utils.resetValueOfDOMElementInput(updateMaxInput);
    updateFunction();
}

let updateCounterValueFunction = function updateCounterValue() {
    let counterValueUpdated = parseInt(updateCounterInput.value);
    utils.setCounterValue(counterValueUpdated);
    updatePersonDisplay(counterValueUpdated);
    utils.resetValueOfDOMElementInput(updateCounterInput);
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
const peopleContainer = document.getElementById("people_container");

initApplication();

addButton.addEventListener("click", increaseFunction);
subtractButton.addEventListener("click", decreaseFunction);
resetButton.addEventListener("click", resetFunction);
updateMaxButton.addEventListener("click", updateMaxValueFunction);
updateCounterButton.addEventListener("click", updateCounterValueFunction);

function initApplication() {
    updateFunction();
}

function addPerson(counterValue) {
    let singlePerson = document.createElement("img");
    singlePerson.className = "person_icon"
    if (utils.isCounterEqualOrGreaterOfMax(counterValue)) {
        singlePerson.src = "../img/red_person_icon.svg";
    } else {
        singlePerson.src = "../img/person_icon.svg";
    }
    
    peopleContainer.appendChild(singlePerson);
}

function removePerson(isRequestedToRemoveAll) {
    if (isRequestedToRemoveAll) {
        peopleContainer.innerHTML = ""
    } else {
        let lastPerson = peopleContainer.lastElementChild;
        peopleContainer.removeChild(lastPerson);
    }
}

function updatePersonDisplay(counterValue){
    if(counterValue == 0 || isNaN(counterValue) || !counterValue ) return;

    removePerson(true);
    for(let i = 1; i <= counterValue; i++){
        addPerson(i);
    }
}
