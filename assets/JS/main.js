let userScore = 0;
let computerScore = 0;
let userScoreSpan = document.getElementById('userScore');
let computerScoreSpan = document.getElementById('computerScore');
let scoreBoardDiv = document.querySelector('.score--board');
let resultsDiv = document.querySelector('.results > p');
let rockDiv = document.getElementById('Rock');
let scissorsDiv = document.getElementById('Scissors');
let paperDiv = document.getElementById('Paper');


function getComputerChoice() {
    let choices = ['Rock', 'Scissors', 'Paper'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultsDiv.innerHTML = `${userChoice} ${smallUserWord} и ${computerChoice} ${smallCompWord}. You won!`;
    let mySound = new Audio('assets/JS/mixkit-achievement-bell-600.wav');
    mySound.volume = 0.5;
    mySound.play();
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultsDiv.innerHTML = `${userChoice} ${smallUserWord} и ${computerChoice} ${smallCompWord}. You lose!`;
    let mySound = new Audio('assets/JS/mixkit-retro-arcade-lose-2027.wav');
    mySound.volume = 0.5;
    mySound.play();
}

function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sup();
    resultsDiv.innerHTML = `${userChoice} ${smallUserWord} and ${computerChoice} ${smallCompWord}.draw!`;
    let mySound = new Audio('assets/JS/mixkit-unlock-game-notification-253.wav');
    mySound.volume = 0.5;
    mySound.play();
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'ScissorsRock':
        case 'RockPaper':
        case 'PaperScissors':
            lose(userChoice, computerChoice);
            break;
        case 'ScissorsScissors':
        case 'PaperPaper':
        case 'RockRock':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {

    rockDiv.addEventListener('click', function () {
        game('Rock');
    })

    scissorsDiv.addEventListener('click', function () {
        game('Scissors');
    })

    paperDiv.addEventListener('click', function () {
        game('Paper');
    })

}

main();