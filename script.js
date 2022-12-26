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
        console.log(`Draft!`);
        return "draft";
    } else if ( computerSelection === "rock" && playerSelection === "paper" || 
                computerSelection === "paper" && playerSelection === "scisors" ||
                computerSelection === "scisors" && playerSelection === "rock") {
        
        console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
        return "win";

    } else {
        console.log(`You loss! ${computerSelection} beats ${playerSelection}!`);
        return "loss";
    }
}

function game() {

    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        
        let result = playRound(getComputerChoice(), getPlayerChoice());

        if (result === "win") {
            playerPoints = playerPoints + 1;
        } else if (result === "loss") {
            computerPoints = computerPoints + 1;
        }
    }

    if (playerPoints > computerPoints) {
        alert(`You won! ${playerPoints} - ${computerPoints}`);
    } else if (playerPoints < computerPoints) {
        alert(`You loss! ${playerPoints} - ${computerPoints}`);
    } else alert(`Draft! ${playerPoints} - ${computerPoints}`);
}

function restartGame() {
    let restart = confirm("Play again?");
    if (restart = true) game();
}

game()
restartGame();