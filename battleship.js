let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location1 + 2;
console.log(location1, location2, location3);

// Display the ship on the game board
const shipLocation1 = document.querySelector(`[data-x="${location1}"]`);
const shipLocation2 = document.querySelector(`[data-x="${location2}"]`);
const shipLocation3 = document.querySelector(`[data-x="${location3}"]`);
console.log(shipLocation1, shipLocation2, shipLocation3);
[shipLocation1, shipLocation2, shipLocation3].forEach((ship) => {
  ship.classList.add("ship");
});

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  alert("Let's play a game call Battle Ship!");
  let guess;
  let totalGuess = 0;
  let hit = 0;
  let isSunk = false;
  while (!isSunk) {
    guess = parseInt(prompt("Enter a guess number"));
    while (guess < 0 || guess > 6 || guess === "") {
      guess = parseInt(prompt("Please enter a number between 0 and 6"));
    }
    totalGuess = totalGuess + 1;
    if (guess === location1) {
      alert("Hit!");
      location1 = true;
    } else if (guess === location2) {
      alert("Hit!");
      location2 = true;
    } else if (guess === location3) {
      alert("Hit!");
      location3 = true;
    } else {
      alert("Miss!");
    }
    isSunk =
      (typeof location1 === "boolean" ? location1 : false) &&
      (typeof location2 === "boolean" ? location2 : false) &&
      (typeof location3 === "boolean" ? location3 : false);
  }
  alert("Congratulations! You won!");
  console.log("You hit the ship with a number of guesses: ", totalGuess);
  location1 = null;
  location2 = null;
  location3 = null;
});
