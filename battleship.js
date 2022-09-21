const location1 = Math.floor(Math.random() * 5);
const location2 = location1 + 1;
const location3 = location1 + 2;
let guess;
let totalGuess = 0;
let hit = 0;
let isHitLocation1 = false;
let isHitLocation2 = false;
let isHitLocation3 = false;
let isSunk = false;

alert("Let's play a game call Battle Ship!")
while (!isSunk) {
    guess = parseInt(prompt("Enter a guess number"));
    while (guess < 0 || guess > 6 || guess === '') {
        guess = parseInt(prompt("Please enter a number between 0 and 6"));
    }
    totalGuess = totalGuess + 1;

    if (guess === location1) {
        if (isHitLocation1) {
            alert("You already hit this location!")
        } else {
            alert("Hit!")
            isHitLocation1 = true;
        }
    } else if (guess === location2) {
        if (isHitLocation2) {
            alert("You already hit this location!")
        } else {
            alert("Hit!")
            isHitLocation2 = true;
        }
    } else if (guess === location3) {
        if (isHitLocation3) {
            alert("You already hit this location!")
        } else {
            alert("Hit!")
            isHitLocation3 = true;
        }
    } else {
        alert("Miss!")
    }
    isSunk = isHitLocation1 && isHitLocation2 && isHitLocation3
}
alert("Congratulations! You won!");
console.log("You hit the ship with a number of guesses: ", totalGuess);