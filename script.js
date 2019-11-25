let compScore = 0;
let playerScore = 0;

// const rock = document.querySelector("#rock");
// rock.addEventListener("click", playerSelection);

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", playerSelection);

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", playerSelection);
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

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      compScore++;
      return compWins + " Paper beats Rock!";
    } else {
      playerScore++;
      return playerWins + " Rock beats Scissors!";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      compScore++;
      return compWins + " Scissors beats Paper!";
    } else {
      playerScore++;
      return playerWins + " Paper beats Rock!";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      compScore++;
      return compWins + " Rock beats Scissors!";
    } else {
      playerScore++;
      return playerWins + " Scissors beats Paper!";
    }
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  // for (let i = 0; i < 5; i++) {
  //   // let playerSelection = prompt("Please input either rock, paper, or scissors!");
  //   let computerSelection = computerPlay();
  //   let result = console.log(playRound(playerSelection,computerSelection));
  //   // console.log(result);
  // }

  const container = document.querySelector("#container");
  const displayResults = document.querySelector(".displayResults");
  const dsC = document.querySelector("#dsC");
  const dsP = document.querySelector("#dsP");
  // const dsS = document.querySelector("#dsS");
  displayResults.appendChild(dsC);
  displayResults.appendChild(dsP);
  // displayResults.appendChild(dsS);

  // to display results
  const finalResults = document.querySelector("#finalResults");
  displayResults.appendChild(finalResults);
  // append display results (div) to container (div)
  container.appendChild(displayResults);

  if (compScore == playerScore) {
    finalResults.textContent = "It's a draw! Thanks for playing!";
    // console.log("It's a draw! Thanks for playing!");
  } else if (compScore > playerScore) {
    finalResults.textContent = "Computer Wins!";

    // console.log(
    //   "Computer Wins! Computer Score: " +
    //     compScore +
    //     "| Player Score: " +
    //     playerScore
    // );
  } else if (playerScore > compScore) {
    finalResults.textContent = "Player Wins!";

    // console.log(
    //   "Player Wins! Player Score: " +
    //     playerScore +
    //     "| Computer Score: " +
    //     compScore
    // );
  } else {
    finalResults.textContent = "You both win for playing!";

    // console.log("Not sure what happened here! But you both win for playing!");
  }
}

game();
