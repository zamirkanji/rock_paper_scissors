let compScore = 0;
let playerScore = 0;

const container = document.querySelector("#container");
const displayResults = document.querySelector(".displayResults");

//display comp and player score
const displayCompScore = document.querySelector("#displayCompScore");
const displayPlayerScore = document.querySelector("#displayPlayerScore");
let dsC = (displayCompScore.textContent = "Computer Score: " + compScore);
let dsP = (displayPlayerScore.textContent = "Player Score: " + playerScore);

// display comp and player score should  fire off when playround() is called
displayResults.appendChild(displayCompScore);
displayResults.appendChild(displayPlayerScore);

container.appendChild(displayResults);

const finalResults = document.querySelector("#finalResults");
displayResults.appendChild(finalResults);

//
const rock = document.querySelector("#rock");
rock.addEventListener("click", function(playRock) {
  let computer = computerPlay();
  displayResults.textContent = playRound("rock", computer);
  if (playerScore === 5 || compScore === 5) {
    finalR();
  }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", function(playPaper) {
  let computer = computerPlay();
  displayResults.textContent = playRound("paper", computer);
  if (playerScore === 5 || compScore === 5) {
    finalR();
  }
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function(playScissors) {
  let computer = computerPlay();
  displayResults.textContent = playRound("scissors", computer);
  if (playerScore === 5 || compScore === 5) {
    finalR();
  }
});

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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compScore++;
      dsC;
      //  return compWins + " Paper beats Rock!";
    } else {
      playerScore++;
      dsP;
      //  return playerWins + " Rock beats Scissors!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      compScore++;
      dsC;
      //  return compWins + " Scissors beats Paper!";
    } else {
      playerScore++;
      dsP;
      // return playerWins + " Paper beats Rock!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      compScore++;
      dsC;
      // return compWins + " Rock beats Scissors!";
    } else {
      playerScore++;
      dsP;
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
