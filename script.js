const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let playerChoice;
let computerChoice;

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

function playGame(player, computer) {
    let outcome;
    
    if (player === computer) {
        outcome = console.log('It\'s a Tie! You Both Chose ' + player + '!');
    } else if ((player === 'Rock' && computer === 'Paper') || (player === 'Paper' && computer === 'Scissors') || (player === 'Scissors' && computer === 'Rock')) {
        outcome = console.log('You Lose! ' + computer + ' beats ' + player + '!');
    } else {
        outcome = console.log('You Win! ' + player + ' beats ' + computer + '!');
    }

    return outcome;
}

computerChoice = getComputerChoice();

playerChoice = prompt('Choose Rock, Paper, or Scissors!');

playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();


console.log(playGame(playerChoice, computerChoice));