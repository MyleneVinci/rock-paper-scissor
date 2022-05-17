let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const scoreBoardDisplay = document.querySelector(".score-board");
const resultDisplay = document.querySelector(".result p");
const rockDisplay = document.getElementById("rock");
const paperDisplay = document.getElementById("paper");
const scissorsDisplay = document.getElementById("scissors");
const lizardDisplay = document.getElementById("lizard");
const spockDisplay = document.getElementById("spock");
const resultMessage = document.getElementById("result-message");
const tryAgainMessage = document.getElementById("play-message");
const choice = document.querySelector(".choice");


const convertToFrench = (word) => {
        if ( word === "rock") return "Pierre";
        if ( word === "paper") return "Papier";
        return "Ciseaux";
    }

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const gameResult =(result) => {  
    resultMessage.innerHTML = `${result} !`;
    tryAgainMessage.innerHTML = " ";
    setTimeout(() => {tryAgainMessage.innerHTML = `Joue encore !`}, 800);
}


const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    console.log('win');
    gameResult("gagné");
}

const lose = (userChoice, computerChoice) => {
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    console.log('lose');
    gameResult("perdu");
}

const draw = (userChoice, computerChoice) => {
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultDisplay.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}`
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
    console.log('draw');
    gameResult("Egalité");
}


const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors": 
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
}
}

const main = () => {
    rockDisplay.addEventListener('click', () => game("rock"));
    paperDisplay.addEventListener('click', () => game("paper"));
    scissorsDisplay.addEventListener('click', () => game("scissors"));
}
main();


