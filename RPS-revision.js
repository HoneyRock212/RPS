function computer() {
    const random = Math.floor(Math.random()*3)+1;
    if(random === 1){
        return "rock";
    }
    else if(random === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const victor = document.querySelector('.victor');
const playerimg = document.querySelector('.playerimg');
const computerimg = document.querySelector('.computerimg');
let gameCounter = 0;
let pScore = 0;
let cScore = 0;

function playGame(playerPick, computerPick = computer()) {
    playerChoice = playerPick.toUpperCase();

    if(playerChoice === "ROCK" && computerPick === "scissors"){
        pScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked scissors.`;
        playerScore.innerText = `${pScore}`;
        victor.innerText =`The player won the round!`;
        playerimg.src="img/rock.jpg";
        computerimg.src="img/scissors.jpg";
    }
    else if(playerChoice === "ROCK" && computerPick === "paper"){
        cScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked paper.`;
        computerScore.innerText = `${cScore}`;
        victor.innerText =`The computer won the round!`;
        playerimg.src="img/rock.jpg";
        computerimg.src="img/paper.jpg";

    } 
    else if(playerChoice ==="ROCK" && computerPick ==="ROCK"){
        result.innerText = `The player and computer picked the same choice.`;
        victor.innerText = `It's a draw!`;
        playerimg.src="img/rock.jpg";
        computerimg.src="img/rock.jpg";

    }

    else if(playerChoice === "PAPER" && computerPick === "rock"){
        pScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked rock.`;
        playerScore.innerText = `${pScore}`;
        victor.innerText =`The player won the round!`;
        playerimg.src ="img/paper.jpg";
        computerimg.src="img/rock.jpg";

    }
    else if(playerChoice === "PAPER" && computerPick === "scissors"){
        cScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked scissors.`;
        computerScore.innerText = `${cScore}`;
        victor.innerText =`The computer won the round!`;
        playerimg.src = "img/paper.jpg";
        computerimg.src = "img/scissors.jpg";

    } 
    else if(playerChoice ==="PAPER" && computerPick === "paper"){
        result.innerText = `The player and computer picked the same choice.`;
        victor.innerText = `It's a draw!`;
        playerimg.src = "img/paper.jpg";
        computerimg.src = "img/paper.jpg"
    }
    
    else if(playerChoice === "SCISSORS" && computerPick === "paper"){
        pScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked paper.`;
        playerScore.innerText = `${pScore}`;
        victor.innerText =`The player won the round!`;
        playerimg.src = "img/scissors.jpg";
        computerimg.src = "img/paper.jpg";

    }
    else if(playerChoice === "SCISSORS" && computerPick === "rock"){
        cScore++;
        result.innerText = `The player picked ${playerChoice.toLowerCase()} and the computer picked rock.`;
        computerScore.innerText = `${cScore}`;
        victor.innerText =`The computer won the round!`;
        playerimg.src = "img/scissors.jpg";
        computerimg.src = "img/rock.jpg";

    } 
    else if(playerChoice === "SCISSORS" && computerPick ==="scissors") {
        result.innerText = `The player and computer picked the same choice.`;
        victor.innerText = `It's a draw!`;
        playerimg.src = "img/scissors.jpg";
        computerimg.src = "img/scissors.jpg";
    }
    
}

rock.addEventListener("click", () => {
     playGame("rock");
     gameCounter++;
     if(gameCounter === 5){
        if(pScore>cScore){
            victor.innerText = "The player won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;

        }
        else {
            victor.innerText = "The computer won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
     }
     
 }
 );

paper.addEventListener("click", () => {
    playGame("paper");
    gameCounter++;
    if(gameCounter === 5){
        if(pScore>cScore){
            victor.innerText = "The player won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
        else {
            victor.innerText = "The computer won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
     }
    
}
);

scissors.addEventListener("click", () => {
    playGame("scissors");
    gameCounter++;
    if(gameCounter === 5){
        if(pScore>cScore){
            victor.innerText = "The player won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
        else if(pScore<cScore){
            victor.innerText = "The computer won the game!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
        else{
            victor.innerText = "The game ends in a draw!";
            gameCounter = 0;
            pScore = 0;
            cScore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
        }
     }
}
);