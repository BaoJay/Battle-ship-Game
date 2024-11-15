let location1;
let location2;
let location3;
function resetGame() {
  location1 = Math.floor(Math.random() * 5);
  location2 = location1 + 1;
  location3 = location1 + 2;
  // Remove the ship from the game board
  const shipLocations = document.querySelectorAll(".ship");
  shipLocations.forEach((ship) => {
    ship.classList.remove("ship");
  });
  // Display the ship on the game board
  const shipLocation1 = document.querySelector(`[data-x="${location1}"]`);
  const shipLocation2 = document.querySelector(`[data-x="${location2}"]`);
  const shipLocation3 = document.querySelector(`[data-x="${location3}"]`);
  console.log(shipLocation1, shipLocation2, shipLocation3);
  [shipLocation1, shipLocation2, shipLocation3].forEach((ship) => {
    ship.classList.add("ship");
  });
}
resetGame();
console.log(location1, location2, location3);

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  alert("Let's play a game call Battle Ship!");
  let guess;
  let totalGuess = 0;
  let hit = 0;
  let isSunk = false;
  while (!isSunk) {
    guess = prompt("Enter a guess number");
    console.log("Your guess is: ", guess);
    while (guess < 0 || guess > 6 || guess === "") {
      guess = prompt("Please enter a number between 0 and 6");
    }
    totalGuess = totalGuess + 1;
    if (parseInt(guess) === location1) {
      alert("Hit!");
      location1 = true;
    } else if (parseInt(guess) === location2) {
      alert("Hit!");
      location2 = true;
    } else if (parseInt(guess) === location3) {
      alert("Hit!");
      location3 = true;
    } else if (guess === "q") {
      break;
    } else {
      alert("Miss!");
    }
    isSunk =
      (typeof location1 === "boolean" ? location1 : false) &&
      (typeof location2 === "boolean" ? location2 : false) &&
      (typeof location3 === "boolean" ? location3 : false);
  }
  if (isSunk) {
    alert("Congratulations! You won!");
  }
  console.log("You hit the ship with a number of guesses: ", totalGuess);
  resetGame();
});
