const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors"

function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3) + 1;
    let computerDecision;

    if (computerChoice === 1) {
        computerDecision = rock;
    } else if (computerChoice === 2) {
        computerDecision = paper;
    } else {
        computerDecision = scissors;
    }

    return computerDecision;
}

console.log(getComputerChoice());