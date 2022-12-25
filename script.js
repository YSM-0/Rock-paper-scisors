/* SCRIPT of the game */


function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scisors";
    }
}

function getPlayerChoice() {
    let playerSelection;

    playerSelection = prompt("Rock, Paper or Scisors ?", "");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(computerSelection, playerSelection) {

    console.log(computerSelection);
    if (computerSelection === playerSelection) {
        return "No one wins! Try again!";
    } else if ( computerSelection === "rock" && playerSelection === "paper" || 
                computerSelection === "paper" && playerSelection === "scisors" ||
                computerSelection === "scisors" && playerSelection === "rock") {
        return `You won! ${playerSelection} beats ${computerSelection}!`;

    } else {
        return `You loss! ${computerSelection} beats ${playerSelection}!`;
    }
}

alert(playRound(getComputerChoice(), getPlayerChoice()));

