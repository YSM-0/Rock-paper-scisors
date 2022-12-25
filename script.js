/* SCRIPT of the game */

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

console.log(getComputerChoice());