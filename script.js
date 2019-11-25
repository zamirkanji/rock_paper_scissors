const container = document.querySelector("#container");
const displayResults = document.querySelector(".displayResults");
const dsC = document.querySelector("#dsC");
const dsP = document.querySelector("#dsP");
displayResults.appendChild(dsC);
displayResults.appendChild(dsP);
container.appendChild(displayResults);
const finalResults = document.querySelector("#finalResults");
displayResults.appendChild(finalResults);

let compScore = 0;
let playerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound(playerSelection));

const paper = document.querySelector("#paper");
paper.addEventListener("click", playRound(playerSelection));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound(playerSelection));

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

  if (pl) {
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
