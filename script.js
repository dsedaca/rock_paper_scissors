let playerChoice;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function getComputerChoice () {

    let Choice = Math.floor(Math.random() * 3) + 1;
    let Decision;

    if (Choice === 1) {
        Decision = "Rock";
    } else if (Choice === 2) {
        Decision = "Paper";
    } else {
        Decision = "Scissors";
    }

    return Decision;
}

function playRound(playerChoice) {

    computerChoice = getComputerChoice();

    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

    
    if (playerChoice === computerChoice) {
        result.textContent = `It''s a Tie! You Both Chose ${playerChoice}!`;
    } else if ((playerChoice === 'Rock' && computerChoice === 'Paper') || (playerChoice === 'Paper' && computerChoice === 'Scissors') || (playerChoice === 'Scissors' && computerChoice === 'Rock')) {
        result.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
        computerWin += 1;
    } else {
        result.textContent = `You Win! ${playerChoice} beats ${computerChoice}!`;
        playerWin += 1;
    }
    
    total.textContent = '\nPlayer wins: ' + playerWin;
    total.textContent += '\nComputer wins: ' + computerWin;

    checkWins(playerWin, computerWin);
    
}

function checkWins(player, computer) {    
    if (player === 5) {
        result.textContent = 'Congratulations! You won!';
        resetGame();       
    } else if (computer === 5) {
        result.textContent = 'Sorry. You lost.';
        resetGame();
    } else {
        return;
    }
}

function resetGame() {
    const restart = document.createElement('button');
    
    rock.remove();
    paper.remove();
    scissors.remove();

    restart.classList.add('restart');
    restart.textContent = 'Restart';
    body.prepend(restart);

    restart.addEventListener('click', () => {
        location.reload();
    })
}

const body = document.querySelector('body');
const result = document.createElement('p');
const total = document.createElement('p');

result.classList.add('result');
total.classList.add('total')

body.appendChild(result);
body.appendChild(total);

rock.addEventListener('click', () => {
    playRound('rock');
});

paper.addEventListener('click', () => {
    playRound('paper');
});

scissors.addEventListener('click', () => {
    playRound('scissors');
});

