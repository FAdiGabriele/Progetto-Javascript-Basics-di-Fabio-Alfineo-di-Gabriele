import * as utils from './utils.js';

export function addPerson(peopleContainer, counterValue) {
    let singlePerson = document.createElement("img");
    singlePerson.className = "person_icon"
    if (utils.isCounterEqualOrGreaterOfMax(counterValue)) {
        singlePerson.src = "../img/red_person_icon.svg";
    } else {
        singlePerson.src = "../img/person_icon.svg";
    }
    
    peopleContainer.appendChild(singlePerson);
}

export function removePerson(peopleContainer, isRequestedToRemoveAll) {
    if (isRequestedToRemoveAll) {
        peopleContainer.innerHTML = ""
    } else {
        let lastPerson = peopleContainer.lastElementChild;
        peopleContainer.removeChild(lastPerson);
    }
}

export function updatePersonDisplay(peopleContainer, counterValue){
    removePerson(peopleContainer, true);
    for(let i = 1; i <= counterValue; i++){
        addPerson(peopleContainer, i);
    }
}
