let playerPoint = 0;
let computerPoint = 0;
let playerSelection;
let computerSelection;
const arr = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomNum = arr[Math.floor(Math.random() * arr.length)];
    return randomNum;
};

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper or Scissors?');
    computerSelection = computerPlay().toLowerCase();

    console.log('You played ' + playerSelection + ' and computer played ' + computerSelection);

    if (playerSelection == computerSelection) {
        'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ) {
        playerPoint = playerPoint + 1;
        console.log('Ponto para voce, agora voce tem ' + playerPoint);
    } else {
        computerPoint = computerPoint + 1;
        console.log('Ponto para o computador, agora ele tem ' + computerPoint);
    }
};

function winner() {
    if (playerPoint > computerPoint) {
        console.log('Parabens, voce ganhou!')
    } else {
        console.log('Infelizmente voce perdeu :(')
    }
}

function game() {
    for(;;) {
        computerPlay();
        playRound();
        if (playerPoint > 4) {
            break;
        } else if (computerPoint > 4) {
            break;
        }
    };
    winner();
}