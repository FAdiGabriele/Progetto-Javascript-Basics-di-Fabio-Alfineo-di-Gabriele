const colors = {
    black: "#000000",
    orange: "#FF8000",
    red: "#FF0000"
}

let counter = 0;
let maxPeople = 0;

function isFirstOverSeventyPercentOfSecond() {
    const seventyPercentOfSecond = 0.70 * maxPeople;
    return maxPeople > 0 && counter > seventyPercentOfSecond;
}

export function checkCounterColor() {
    let selectedColor;

    switch (true) {
        case isCounterEqualOrGreaterOfMax(counter):
            selectedColor = colors.red;
            break;
        case isFirstOverSeventyPercentOfSecond():
            selectedColor = colors.orange;
            break;
        default:
            selectedColor = colors.black;
    }

    return selectedColor;
}

export function increaseCounter() {
    counter++;
}

export function decreaseCounter() {
    counter--;
}

export function resetCounter() {
    counter = 0;
}

export function getCounterValue() {
    return counter;
}

export function setMaxValue(value) {
    if (isNaN(value) || !value) {
        maxPeople = 0;
    } else {
        maxPeople = value;
    }
}

export function getMaxPeople() {
    return maxPeople;
}

export function setCounterValue(value) {
    if (isNaN(value) || !value) {
        counter = 0;
    } else {
        counter = value;
    }
}

export function isCounterEqualOrGreaterOfMax(counterValue) {
    return maxPeople > 0 && counterValue > maxPeople;
}