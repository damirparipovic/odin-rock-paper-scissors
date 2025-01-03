const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
const targetScore = 5;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function refreshScreen() {
    let computerScoreCont = document.querySelector("#computer-score");
    computerScoreCont.textContent = computerScore;

    let humanScoreCont = document.querySelector("#player-score");
    humanScoreCont.textContent = humanScore;
}

function checkForWin() {
    let resScreen = document.querySelector(".results");
    if (humanScore === targetScore) {
        resScreen.textContent = "PLAYER WINS!"
    } else if (computerScore === targetScore) {
        resScreen.textContent = "COMPUTER WINS!"
    }
}

function getResult(humanChoice, computerChoice) {
    let resScreen = document.querySelector(".results");

    if (humanChoice == computerChoice) {
        // tie
        resScreen.textContent = "This round is a tie.";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        resScreen.textContent = "You Win this round :)";
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        resScreen.textContent = "You Win this round :)";
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        resScreen.textContent = "You Win this round :)";
        humanScore++;
    } else {
        // lose
        resScreen.textContent = "You lose this round.";
        computerScore++;
    }

    refreshScreen();

    checkForWin();
}

function playRound(event) {
    if ((computerScore === targetScore) || (humanScore === targetScore)) {
        console.log("Game is over resfresh to play again.");
        return;
    }
    let humanChoice = event.target.value;
    let computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    getResult(humanChoice, computerChoice);
}

function setupButtons() {
    let btnRock = document.querySelector('#btn-rock')
    btnRock.addEventListener('click', playRound);

    let btnPaper = document.querySelector('#btn-paper')
    btnPaper.addEventListener('click', playRound);

    let btnScissors = document.querySelector('#btn-scissors')
    btnScissors.addEventListener('click', playRound);
}

function main() {
    setupButtons();
}

main();
