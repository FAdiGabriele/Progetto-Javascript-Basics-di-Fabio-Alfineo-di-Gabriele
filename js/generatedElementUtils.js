export function generateAddButton() {
    let addButton = document.createElement("button");
    addButton.className = "button";
    addButton.id = "add"
    addButton.innerHTML = "+"

    return addButton;
}

export function generateMinusButton() {
    let minusButton = document.createElement("button");
    minusButton.className = "button";
    minusButton.id = "minus"
    minusButton.innerHTML = "-"

    return minusButton;
}

export function generateResetButton() {
    let resetButton = document.createElement("button");
    resetButton.className = "button";
    resetButton.id = "reset"
    resetButton.innerHTML = "RESET"

    return resetButton;
}

export function generateMaxScreen() {
    let maxScreen = document.createElement("p");
    maxScreen.className = "screen";
    maxScreen.id = "max_screen"

    return maxScreen;
}

export function generateScreen() {
    let screen = document.createElement("p");
    screen.className = "screen";
    screen.id = "screen"

    return screen;
}

export function generateMaxScreenBox(screenMaxElement) {
    let maxScreenBox = document.createElement("div");
    maxScreenBox.className = "screen_box"

    maxScreenBox.appendChild(generateMaxLabel());
    maxScreenBox.appendChild(screenMaxElement);

    return maxScreenBox;

}

export function generatePeopleScreenBox(screenElement) {

    let peopleScreenBox = document.createElement("div");
    peopleScreenBox.className = "screen_box"

    peopleScreenBox.appendChild(generatePeopleLabel());
    peopleScreenBox.appendChild(screenElement);

    return peopleScreenBox;
}

function generateMaxLabel() {
    let maxLabel = document.createElement("p");
    maxLabel.className = "label";
    maxLabel.innerHTML = "Capacità massima di persone:";

    return maxLabel;
}

function generatePeopleLabel() {
    let peopleLabel = document.createElement("p");
    peopleLabel.className = "label";
    peopleLabel.innerHTML = "Persone presenti nel luogo:"

    return peopleLabel;
}