// VARIABLES 

const startButton = document.querySelector('#startButton');
const choiceButtons = document.querySelectorAll('.choiceButton');
const displayResult = document.querySelectorAll('.finalResult');
const winResult = document.getElementById('win');
const lossResult = document.getElementById('loss');

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const playerResultElement = document.querySelector('#playerResult');
const computerResultElement = document.querySelector('#computerResult');

let playerResult = 0;
let computerResult = 0;

// FUNCTIONS

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    console.log(computerSelection);

    if (computerSelection === playerSelection) {
        console.log(`Draft!`);
    } else if ( computerSelection === "rock" && playerSelection === "paper" || 
                computerSelection === "paper" && playerSelection === "scissors" ||
                computerSelection === "scissors" && playerSelection === "rock") {
        
        console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
        playerResult++;
        playerResultElement.innerText = playerResult;
    } else {
        console.log(`You loss! ${computerSelection} beats ${playerSelection}!`);
        computerResult++;
        computerResultElement.innerText = computerResult;
    }

    if (playerResult === 3) { 
        document.querySelectorAll('.results').forEach((result) => result.classList.add('hide'));
        winResult.classList.remove('hide');
        choiceButtons.forEach((button) => button.classList.add('hide'));
        startButton.innerText = 'RESTART';
        startButton.classList.remove('hide');
    } else if (computerResult === 3) {
        document.querySelectorAll('.results').forEach((result) => result.classList.add('hide'));
        lossResult.classList.remove('hide');
        choiceButtons.forEach((button) => button.classList.add('hide'));
        startButton.innerText = 'RESTART';
        startButton.classList.remove('hide');
    } return;
}

function restartGame() {
    let restart = confirm("Play again?");
    if (restart = true) game();
}

function init() {
    startButton.classList.add('hide');
    displayResult.forEach((finalResult) => finalResult.classList.add('hide'));
    document.querySelectorAll('.results').forEach((result) => result.classList.remove('hide'));
    choiceButtons.forEach((button) => button.classList.remove('hide'));

    playerResult = 0;
    computerResult = 0;

    playerResultElement.innerText = playerResult;
    computerResultElement.innerText = computerResult;
    return;
}
 
// SCRIPT OF THE GAME

choiceButtons.forEach((button) => button.classList.add('hide'));
displayResult.forEach((results) => results.classList.add('hide'));

startButton.addEventListener('click', init);

rockButton.addEventListener('click', function rock() {
    playRound(getComputerChoice(), 'rock');
});
paperButton.addEventListener('click', function paper() {
    playRound(getComputerChoice(), 'paper');
});
scissorsButton.addEventListener('click', function scissors() {
    playRound(getComputerChoice(), 'scissors');
});


