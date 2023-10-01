import * as utils from './utils.js';
import * as generatedUtils from './generatedElementUtils.js'
import * as personUtils from './updatePersonGraphicsUtils.js'

let increaseFunction = function increaseCounter() {
    utils.increaseCounter();
    personUtils.addPerson(peopleContainer, utils.getCounterValue());
    updateCounterscreen();
}

let decreaseFunction = function decreaseCounter() {
    if (utils.getCounterValue() > 0) {
        utils.decreaseCounter();
        personUtils.removePerson(peopleContainer, false);
        updateCounterscreen();
    }
}

let resetFunction = function resetCounter() {
    utils.resetCounter();
    personUtils.removePerson(peopleContainer, true);
    updateCounterscreen();
}

let updateMaxValueFunction = function updateMaxValue() {
    let maxValueUpdated = parseInt(updateMaxInput.value);
    utils.setMaxValue(maxValueUpdated);
    personUtils.updatePersonDisplay(peopleContainer, utils.getCounterValue());
    updateMaxInput.value = null;
    updateCounterscreen();
}

let updateCounterValueFunction = function updateCounterValue() {
    let counterValueUpdated = parseInt(updateCounterInput.value);
    utils.setCounterValue(counterValueUpdated);
    personUtils.updatePersonDisplay(peopleContainer, counterValueUpdated);
    updateCounterInput.value = null;
    updateCounterscreen();
}

const addButton = generatedUtils.generateButton("add", "+");
const subtractButton = generatedUtils.generateButton("minus", "-");
const resetButton = generatedUtils.generateButton("reset", "RESET");
const screen = generatedUtils.generateScreen("screen");
const screenMax = generatedUtils.generateScreen("max_screen");
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
    updateCounterscreen();
}


function generateContent() {
    let containerScreenDiv = document.createElement("div");
    containerScreenDiv.className = "content_organizer";

    containerScreenDiv.appendChild(generatedUtils.generateScreenBox(generatedUtils.generateLabel("Capacità massima di persone:"), screenMax))
    containerScreenDiv.appendChild(generatedUtils.generateScreenBox(generatedUtils.generateLabel("Persone presenti nel luogo:"), screen));

    generatedElementContainer.appendChild(containerScreenDiv);

    let containerButtonDiv = document.createElement("div");
    containerButtonDiv.className = "content_organizer";
    containerButtonDiv.appendChild(addButton);
    containerButtonDiv.appendChild(resetButton);
    containerButtonDiv.appendChild(subtractButton);

    generatedElementContainer.appendChild(containerButtonDiv);
}

function updateCounterscreen() {
    screen.innerHTML = utils.getCounterValue();
    screenMax.innerHTML = utils.getMaxPeople();
    screen.style.color = utils.checkCounterColor();
}