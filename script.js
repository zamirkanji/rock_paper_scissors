let compScore = 0;
let playerScore = 0;

const container = document.querySelector("#container");
const displayResults = document.querySelector(".displayResults");

//display comp and player score
const displayCompScore = document.querySelector("#displayCompScore");
const displayPlayerScore = document.querySelector("#displayPlayerScore");

// let dsC =
displayCompScore.textContent = "Computer Score: " + compScore;
// let dsP =
displayPlayerScore.textContent = "Player Score: " + playerScore;

const finalResults = document.querySelector("#finalResults");

// display comp and player score should fire off when playRound() is called
displayResults.appendChild(displayCompScore);
displayResults.appendChild(displayPlayerScore);

container.appendChild(finalResults);
// container.appendChild(displayResults);

// When selecting each buttton, fire off playRound function
const rock = document.querySelector("#rock");
rock.addEventListener("click", function(event) {
  let computer = computerPlay();
  playRound("rock", computer);
  if (playerScore === 5 || compScore === 5) {
    finalR();
    // break;
  }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(event) {
  let computer = computerPlay();
  playRound("paper", computer); // figure out arguments?
  if (playerScore === 5 || compScore === 5) {
    finalR();
    // break;
  }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(event) {
  let computer = computerPlay();
  // displayResults.textContent =
  playRound("scissors", computer);
  if (playerScore === 5 || compScore === 5) {
    finalR();
    // break;
  }
});

// fucntion to randomize computer selection
function computerPlay() {
  const randNum = Math.floor(Math.random() * 3 + 1);
  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = playerSelection.toLowerCase();
  // computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    finalResults.textContent = "This round is a tie. Keep playing!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compScore++;
      displayCompScore.textContent = "Computer Score: " + compScore;
      // return dsC;
      //  return compWins + " Paper beats Rock!";
    } else {
      playerScore++;
      displayPlayerScore.textContent = "Player Score: " + playerScore;
      // return dsP;
      //  return playerWins + " Rock beats Scissors!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      compScore++;
      displayCompScore.textContent = "Computer Score: " + compScore;
      //  return compWins + " Scissors beats Paper!";
    } else {
      playerScore++;
      displayPlayerScore.textContent = "Player Score: " + playerScore;
      //  return playerWins + " Paper beats Rock!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      compScore++;
      displayCompScore.textContent = "Computer Score: " + compScore;
      // return compWins + " Rock beats Scissors!";
    } else {
      playerScore++;
      displayPlayerScore.textContent = "Player Score: " + playerScore;
      // return playerWins + " Scissors beats Paper!";
    }
  }
}
// console.log(playRound(playerSelection, computerSelection));

//Displaying FINAL results

function finalR() {
  if (compScore == playerScore) {
    finalResults.textContent = "It's a draw! Thanks for playing!";
  } else if (compScore > playerScore) {
    finalResults.textContent = "Computer Wins!";
  } else if (playerScore > compScore) {
    finalResults.textContent = "Player Wins!";
  } else {
    finalResults.textContent = "You both win for playing!";
  }
}

//function game() {
// for (let i = 0; i < 5; i++) {
//   // let playerSelection = prompt("Please input either rock, paper, or scissors!");
//   let computerSelection = computerPlay();
//   let result = console.log(playRound(playerSelection,computerSelection));
//   // console.log(result);
// }
// }

// game()
