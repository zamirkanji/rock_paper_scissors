  let compScore = 0;
  let playerScore = 0;


  // const rock = document.querySelector("#rock");
  // rock.addEventListener("click", playerSelection);

  // const paper = document.querySelector("#paper");
  // paper.addEventListener("click", playerSelection);

  // const scissors = document.querySelector("#scissors");
  // scissors.addEventListener("click", playerSelection);



    function computerPlay() {
       const randNum = Math.floor((Math.random() * 3) + 1);
        if (randNum === 1) {
          return "rock";
        } else if (randNum === 2) {
          return "paper";
        } else {
          return "scissors";
        }
    }

    function oneRound(playerSelection,computerSelection) {
      playerSelection = playerSelection.toLowerCase();
      computerSelection = computerSelection.toLowerCase();


      if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
      } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
          compScore++;
          return compWins + " Paper beats Rock!";
            } else {
              playerScore++;
              return playerWins + " Rock beats Scissors!";
            }
      } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors') {
          compScore++;
          return compWins + ' Scissors beats Paper!';
            } else {
              playerScore++;
              return playerWins + ' Paper beats Rock!';
            }
      } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          compScore++;
          return compWins + ' Rock beats Scissors!';
            } else {
              playerScore++;
              return playerWins + ' Scissors beats Paper!';
            }
      } 
    }
    
    // console.log(oneRound(playerSelection, computerSelection));

    

    function game() { 
      for (let i = 0; i < 5; i++) {
        // let playerSelection = prompt("Please input either rock, paper, or scissors!");  
        let computerSelection = computerPlay();
        let result = console.log(oneRound(playerSelection,computerSelection));
        // console.log(result);
      }
      if (compScore == playerScore) {
        console.log("It's a draw! Thanks for playing!");
      } else if (compScore > playerScore) {
          console.log("Computer Wins! Computer Score: " + compScore + "| Player Score: " + playerScore);
      } else if (playerScore > compScore) {
          console.log("Player Wins! Player Score: " +     playerScore + "| Computer Score: " + compScore);
      } else {
          console.log("Not sure what happened here! But you both win for playing!");
      }
    }

    game();
