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
    if (guess === "q") {
      break;
    }

    // Validate the user input
    while (guess < 0 || guess > 6 || guess === "" || isNaN(parseInt(guess))) {
      guess = prompt("Please enter a number between 0 and 6");
      if (guess === "q") {
        break;
      }
    }
    totalGuess = totalGuess + 1;
    if (parseInt(guess) === location1) {
      alert("Hit!");
      hit += 1;
    } else if (parseInt(guess) === location2) {
      alert("Hit!");
      hit += 1;
    } else if (parseInt(guess) === location3) {
      alert("Hit!");
      hit += 1;
    } else if (guess === "q") {
      break;
    } else {
      alert("Miss!");
    }
    isSunk = hit === 3;
  }
  if (isSunk) {
    alert(
      `Congratulations! You won!\nYou hit the ship with a number of guesses: ${totalGuess}`
    );
  }
  resetGame();
});
