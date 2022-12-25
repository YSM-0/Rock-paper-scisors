/* SCRIPT of the game */

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    let computerSelection;

    if (computerChoice === 0) {
        computerSelection = "Rock";
    } else if (computerChoice === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scisors";
    }
    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scisors ?", "");

    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}


console.log(getPlayerChoice());