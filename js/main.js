import * as utils from './utils.js';
import * as generatedUtils from './generatedElementUtils.js'
import * as personUtils from './updatePersonGraphicsUtils.js'

let increaseFunction = function increaseCounter() {
    utils.increaseCounter();
    personUtils.addPerson(peopleContainer, utils.getCounterValue());
    updateFunction();
}

let decreaseFunction = function decreaseCounter() {
    if (utils.getCounterValue() > 0) {
        utils.decreaseCounter();
        personUtils.removePerson(peopleContainer, false);
        updateFunction();
    }
}

let resetFunction = function resetCounter() {
    utils.resetCounter();
    personUtils.removePerson(peopleContainer, true);
    updateFunction();
}

let updateFunction = function updateCounterscreen() {
    utils.setHtmlElementValue(screen, utils.getCounterValue());
    utils.setHtmlElementValue(screenMax, utils.getMaxPeople().toString());
    screen.style.color = utils.checkCounterColor();
}

let updateMaxValueFunction = function updateMaxValue() {
    let maxValueUpdated = parseInt(updateMaxInput.value);
    utils.setMaxValue(maxValueUpdated);
    personUtils.updatePersonDisplay(peopleContainer, utils.getCounterValue());
    utils.resetValueOfDOMElementInput(updateMaxInput);
    updateFunction();
}

let updateCounterValueFunction = function updateCounterValue() {
    let counterValueUpdated = parseInt(updateCounterInput.value);
    utils.setCounterValue(counterValueUpdated);
    personUtils.updatePersonDisplay(peopleContainer, counterValueUpdated);
    utils.resetValueOfDOMElementInput(updateCounterInput);
    updateFunction();
}

const addButton = generatedUtils.generateAddButton();
const subtractButton = generatedUtils.generateMinusButton();
const resetButton = generatedUtils.generateResetButton();
const screen = generatedUtils.generateScreen();
const screenMax = generatedUtils.generateMaxScreen();
const updateMaxButton = document.getElementById("update_max");
const updateCounterButton = document.getElementById("update_counter");
const updateMaxInput = document.getElementById("update_max_value");
const updateCounterInput = document.getElementById("update_counter_value");
const peopleContainer = document.getElementById("people_container");
const generatedElementContainer = document.getElementById("generated_elements_container")

initApplication();

addButton.addEventListener("click", increaseFunction);
subtractButton.addEventListener("click", decreaseFunction);
resetButton.addEventListener("click", resetFunction);
updateMaxButton.addEventListener("click", updateMaxValueFunction);
updateCounterButton.addEventListener("click", updateCounterValueFunction);

function initApplication() {
    generateContent();
    updateFunction();
}


function generateContent() {
    let containerScreenDiv = document.createElement("div");
    containerScreenDiv.className = "content_organizer";

    containerScreenDiv.appendChild(generatedUtils.generateMaxScreenBox(screenMax))
    containerScreenDiv.appendChild(generatedUtils.generatePeopleScreenBox(screen));

    generatedElementContainer.appendChild(containerScreenDiv);

    let containerButtonDiv = document.createElement("div");
    containerButtonDiv.className = "content_organizer";
    containerButtonDiv.appendChild(addButton);
    containerButtonDiv.appendChild(resetButton);
    containerButtonDiv.appendChild(subtractButton);

    generatedElementContainer.appendChild(containerButtonDiv);
}