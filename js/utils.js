const colors = {
    black: "#000000",
    orange: "#FF8000",
    red: "#FF0000"
}

let counter = 0;
let maxPeople = 0;

function isFirstOverSeventyPercentOfSecond(first, second) {
    const seventyPercentOfSecond = 0.70 * second;
    return first > seventyPercentOfSecond;
}

export function checkCounterColor(value, maxValueAllowed) {
    let selectedColor;

    if (maxValueAllowed > 0 && value >= maxValueAllowed) {
        selectedColor = colors.red;
    } else if (maxValueAllowed > 0 && isFirstOverSeventyPercentOfSecond(value, maxValueAllowed)) {
        selectedColor = colors.orange;
    } else {
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

export function setCounterValue(value){
    if (isNaN(value) || !value) {
        counter = 0;
    } else {
        counter = value;
    }
}