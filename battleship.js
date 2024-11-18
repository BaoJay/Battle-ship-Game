let location1;
let location2;
let location3;

// Remove the ship from the game board
function removeShip() {
  const shipLocations = document.querySelectorAll(".ship");
  console.log("shipLocations === ", shipLocations);
  shipLocations.forEach((ship) => {
    ship.classList.remove("ship");
  });
}

function randomLocation() {
  location1 = Math.floor(Math.random() * 5);
  location2 = location1 + 1;
  location3 = location1 + 2;
}

function displayShipLocation() {
  // Display the ship on the game board
  const shipLocation1 = document.querySelector(`[data-x="${location1}"]`);
  const shipLocation2 = document.querySelector(`[data-x="${location2}"]`);
  const shipLocation3 = document.querySelector(`[data-x="${location3}"]`);
  [shipLocation1, shipLocation2, shipLocation3].forEach((ship) => {
    ship.classList.add("ship");
  });
}

function isNumberic(str) {
  return /^[0-9]+$/.test(str);
}

const startButton = document.querySelector(".start-button");
const clearButton = document.querySelector(".clear-button");
startButton.addEventListener("click", () => {
  removeShip();
  randomLocation();
  alert("Let's play a game call Battle Ship!");
  let guess;
  let totalGuess = 0;

  let hitLocation1 = false;
  let hitLocation2 = false;
  let hitLocation3 = false;
  let isSunk = hitLocation1 && hitLocation2 && hitLocation3;
  while (!isSunk) {
    guess = prompt("Enter a guess number");

    // Quit the game
    if (guess === "q" || guess === null) {
      break; // Terminate the current loop: while !isSunk
      // Validate the user input
    } else if (guess < 0 || guess > 6 || guess === "" || !isNumberic(guess)) {
      alert("Please enter a number between 0 and 6");
    } else {
      totalGuess = totalGuess + 1;
      if (guess == location1) {
        hitLocation1 = true;
        alert("Hit!");
      } else if (guess == location2) {
        hitLocation2 = true;
        alert("Hit!");
      } else if (guess == location3) {
        hitLocation3 = true;
        alert("Hit!");
      } else {
        alert("Miss!");
      }
    }
    isSunk = hitLocation1 && hitLocation2 && hitLocation3;
  }
  // whenever user ends the game
  if (isSunk) {
    alert(
      `Congratulations! You won!\nYou hit the ship with a number of guesses: ${totalGuess}`
    );
    displayShipLocation();
  } else {
    alert("You quit the game!");
  }
});
clearButton.addEventListener("click", () => {
  removeShip();
});
