'use strict'



//let playerSelection = "rock";
//console.log(computerPlay());
//console.log(playerSelection);
//console.log(playRound(playerSelection.toLowerCase(), computerSelection));

const YOU_WIN = 1;
const YOU_LOSE = -1;
const YOU_DRAW = 0;

game()

function game() {
  let endScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPrompt();
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    let roundScore = playRound(playerSelection, computerSelection)
    endScore += roundScore;
    console.log(`roundScore: ${roundScore}`);
  }
  console.log(`Endscore is ${endScore}`)
  if (endScore) {
    endScore > 0 ? console.log('YOU WIN') : console.log('YOU LOSE');
  } else {
    console.log("YOU DRAW");
  }
}

/**
 * Prompt the player for input and ensure its valid
 * @returns {string}
 */
function playerPrompt() {
  let playerInput;
  let match = false;
  do {
    playerInput = prompt('Select rock, scissors or paper!', 'paper').toLowerCase();
    if (playerInput == 'rock' || playerInput == 'scissors' || playerInput == 'paper') {
      match = true
    }
  } while (!match);
  return playerInput;
}

function computerPlay() {
  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(player, computer) {
  switch (player) {
    case "rock":
      if (computer == "scissors") {
        return YOU_WIN; // Win
      };
      if (computer == "paper") {
        return YOU_LOSE; // Lose
      };
      break;
    case "paper":
      if (computer == "rock") {
        return YOU_WIN;
      };
      if (computer == "scissors") {
        return YOU_LOSE;
      };
      break;
    case "scissors":
      if (computer == "paper") {
        return YOU_WIN;
      };
      if (computer == "rock") {
        return YOU_LOSE;
      };
      break;
    default:
      console.log("Your selection was not valid")
      return NaN
  };
  return YOU_DRAW; // Draw
}

