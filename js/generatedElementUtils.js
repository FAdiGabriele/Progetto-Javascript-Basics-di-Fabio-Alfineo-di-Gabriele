export function generateButton(id, text){
    let button = document.createElement("button");

    button.className = "button";
    button.id = id;
    button.innerHTML = text;

    return button;
}

export function generateScreen(id) {
    let screen = document.createElement("p");
    screen.className = "screen";
    screen.id = id

    return screen;
}

export function generateScreenBox(labelElement, screenElement) {

    let screenBox = document.createElement("div");
    screenBox.className = "screen_box"

    screenBox.appendChild(labelElement);
    screenBox.appendChild(screenElement);

    return screenBox;
}

export function generateLabel(text) {
    let maxLabel = document.createElement("p");
    maxLabel.className = "label";
    maxLabel.innerHTML = text;

    return maxLabel;
}