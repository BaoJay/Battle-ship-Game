const location1 = Math.floor(Math.random() * 6);
const location2 = location1 + 1;
const location3 = location1 + 2;
let guess;
let totalGuess = 0;
let hit = 0;
let isSunk = false;

while (!isSunk) {
    guess = prompt("Enter a guess number");
    if (guess < 0 && guess > 5) {
        guess = prompt("Please enter a number between 0 and 5");
    } else {
        totalGuess = totalGuess + 1;
        if (guess === location1 || guess === location2 || guess === location3) {
            hit = hit + 1;
            console.log("You hit the ship!")
            if (hit === 3) {
                isSunk = true;
                console.log("The ship is sunk!")
            }
        }

    }
}
console.log("You hit the ship with a number of guesses: ", totalGuess);