const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerChoice;
let computerChoice;
let result;
let playerWin = 0;
let computerWin = 0;

function getComputerChoice () {

    let Choice = Math.floor(Math.random() * 3) + 1;
    let Decision;

    if (Choice === 1) {
        Decision = rock;
    } else if (Choice === 2) {
        Decision = paper;
    } else {
        Decision = scissors;
    }

    return Decision;
}

function playRound() {
    let outcome;

    computerChoice = getComputerChoice();

    playerChoice = prompt('Choose Rock, Paper, or Scissors!', '');

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

    
    if (playerChoice === computerChoice) {
        outcome = console.log('It\'s a Tie! You Both Chose ' + playerChoice + '!');
    } else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || (playerChoice === 'Paper' && computerChoice === 'Scissors') || (playerChoice === 'Scissors' && computerChoice === 'Rock')) {
        outcome = console.log('You Lose! ' + computerChoice + ' beats ' + playerChoice + '!');
        computerWin += 1;
    } else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')){
        outcome = console.log('You Win! ' + playerChoice + ' beats ' + computerChoice + '!');
        playerWin += 1;
    } else {
        outcome = console.log(playerChoice + ' is not a valid decision!')
    }

    return outcome;
    return playerWin;
    return computerWin;
}

function game () {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

    console.log('Player Wins: ' + playerWin);
    console.log('Computer Wins: ' + computerWin);
}

game();