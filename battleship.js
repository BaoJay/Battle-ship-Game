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
  [shipLocation1, shipLocation2, shipLocation3].forEach((ship) => {
    ship.classList.add("ship");
  });
}

function isNumberic(str) {
  return /^[0-9]+$/.test(str);
}

const startButton = document.querySelector(".start-button");
resetGame();
startButton.addEventListener("click", () => {
  alert("Let's play a game call Battle Ship!");
  let guess;
  let totalGuess = 0;

  let hitLocation1 = false;
  let hitLocation2 = false;
  let hitLocation3 = false;
  let isSunk = hitLocation1 && hitLocation2 && hitLocation3;
  while (!isSunk) {
    guess = prompt("Enter a guess number");
    console.log("guess === ", guess === "");
    console.log("isNumberic(guess) nè: ", isNumberic(guess));

    // Validate the user input
    if (guess === "q" || guess === null) {
      break;
    } else if (guess < 0 || guess > 6 || guess === "" || !isNumberic(guess)) {
      alert("Please enter a number between 0 and 6");
    } else if (guess == location1) {
      hitLocation1 = true;
      alert("Hit!");
      totalGuess = totalGuess + 1;
    } else if (guess == location2) {
      hitLocation2 = true;
      alert("Hit!");
      totalGuess = totalGuess + 1;
    } else if (guess == location3) {
      hitLocation3 = true;
      alert("Hit!");
      totalGuess = totalGuess + 1;
    } else {
      alert("Miss!");
      totalGuess = totalGuess + 1;
    }
    isSunk = hitLocation1 && hitLocation2 && hitLocation3;
  }
  alert(
    `Congratulations! You won!\nYou hit the ship with a number of guesses: ${totalGuess}`
  );
  resetGame();
});
