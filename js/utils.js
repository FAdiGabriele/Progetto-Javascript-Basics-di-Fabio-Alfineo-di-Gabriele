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

    if (value >= maxValueAllowed && maxValueAllowed != 0) {
        selectedColor = colors.red;
    } else if (isFirstOverSeventyPercentOfSecond(value, maxValueAllowed) && maxValueAllowed != 0) {
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

export function setMaxPeople(value) {
    if (isNaN(value)) {
        maxPeople = 0;
    } else {
        maxPeople = value;
    }
}

export function getMaxPeople() {
    return maxPeople;
}