let playerChoice;
let computerChoice;
let playerWin = 0;
let computerWin = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3) + 1;
    let decision;

    if (choice === 1) {
        decision = "Rock";
    } else if (choice === 2) {
        decision = "Paper";
    } else {
        decision = "Scissors";
    }

    return decision;
}

function playRound(playerChoice) {

    computerChoice = getComputerChoice();
    
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
    playRound('Rock');
});

paper.addEventListener('click', () => {
    playRound('Paper');
});

scissors.addEventListener('click', () => {
    playRound('Scissors');
});

