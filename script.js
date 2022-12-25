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
    const draft = "No one wins! Try again!";
    const win = `You won! ${playerSelection} beats ${computerSelection}!`;
    const loss = `You loss! ${computerSelection} beats ${playerSelection}!`;

    console.log(computerSelection);
    if (computerSelection === playerSelection) {
        return draft;
    } else if ( computerSelection === "rock" && playerSelection === "paper" || 
                computerSelection === "paper" && playerSelection === "scisors" ||
                computerSelection === "scisors" && playerSelection === "rock") {
        return win;

    } else {
        return loss;
    }
}

function game() {

    for (let i = 0; i <= 5; i++) {
        playRound()
    }
}
