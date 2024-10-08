const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Choose 'rock', 'paper', or 'scissors': ");
        humanChoice = humanChoice.toLowerCase();

        if (choices.includes(humanChoice)) {
            return humanChoice;
        } else {
            console.log("Incorrect value provided. Try again.");
        }
    }
}

function getResult(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        // tie
        console.log("This round is a tie.");
        return 0;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You Win this round :)");
        return 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You Win this round :)");
        return 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You Win this round :)");
        return 1;
    } else {
        // lose
        console.log("You lose this round :(");
        return -1;
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    return getResult(humanChoice, computerChoice);
}

function main() {
    let humanScore = 0;
    let computerScore = 0;
    let score = 0;

    while (score < 5) {
        let result = playRound();
        if (result == 1) {
            humanScore++;
        } else if (result == -1) {
            computerScore++;
        }

        score++;
    }

    console.log(" ======== SCORE ========");
    console.log(`Player: ${humanScore} Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Player wins!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins!")
    } else {
        console.log("It's a tie.")
    }
}

main();
