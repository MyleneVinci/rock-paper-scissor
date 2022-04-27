let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

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


const win = (userChoice, computerChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}. Tu as gagné !`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    console.log('win');
}

const lose = (userChoice, computerChoice) => {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}. Tu as perdu !`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    console.log('lose');
}

const draw = (userChoice, computerChoice) => {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Tu as choisi ${convertToFrench(userChoice)}, ton adversaire a choisi ${convertToFrench(computerChoice)}. Egalité !`
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
    console.log('draw');
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
    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}
main();


