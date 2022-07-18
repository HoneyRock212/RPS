function computer() {
    const random = Math.floor(Math.random()*3)+1;
    if(random === 1) {
        return "rock";
    }
    else if(random === 2){
        return "paper";
    }
    else if(random === 3){
        return "scissors";
    }
}

const playerHistory = document.querySelector('.playerHistory');
const computerHistory = document.querySelector('.computerHistory');
const round = document.querySelector('.round');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const player = document.querySelector('.playerProfile');
const comp = document.querySelector('.computerProfile');
const commentary = document.querySelector('.commentary');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const restartmodal = document.querySelector('.restart-modal');
const restart = document.querySelector('.restart');
const start = document.querySelector('.startButton');
const quit = document.querySelector('.quit');
const modalCommentary = document.querySelector('.modalCommentary');

let counter = 0;
let cscore = 0;
let pscore = 0;

function game(playerPick, computerPick = computer()){
    playerChoice = playerPick.toUpperCase();
    if(playerChoice === "ROCK" && computerPick === "scissors"){
        counter++;
        pscore++;
        playerScore.innerText =`${pscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Rock`;
        playerHistory.appendChild(playerHistoryAppend);
        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Scissors`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You won this round! Keep it up!`;
        player.src = "img/rock.jpg";
        comp.src = "img/scissors.jpg";
        
    }

    else if(playerChoice === "ROCK" && computerPick === "paper"){
        counter++;
        cscore++;
        computerScore.innerText =`${cscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Rock`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Paper`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You lost this round!`;
        player.src = "img/rock.jpg";
        comp.src = "img/paper.jpg"
    }
    else if(playerChoice === "ROCK" && computerPick === "rock"){
        counter++;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Rock`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Rock`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `This round is a draw!`;
        player.src = "img/rock.jpg";
        comp.src = "img/rock.jpg";
    }

    else if(playerChoice === "PAPER" && computerPick === "rock"){
        counter++;
        pscore++;
        playerScore.innerText =`${pscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Paper`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Rock`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You won this round! Keep it up!`;
        player.src = "img/paper.jpg";
        comp.src = "img/rock.jpg";
    }

    else if(playerChoice === "PAPER" && computerPick === "scissors"){
        counter++;
        cscore++;
        computerScore.innerText =`${cscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Paper`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Scissors`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You lost this round!`;
        player.src = "img/paper.jpg";
        comp.src = "img/scissors.jpg";
    }
    else if(playerChoice === "PAPER" && computerPick === "paper"){
        counter++;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Paper`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Paper`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `This round is a draw!`;
        player.src = "img/paper.jpg";
        comp.src = "img/paper.jpg";
    }

    else if(playerChoice === "SCISSORS" && computerPick === "paper"){
        counter++;
        pscore++;
        playerScore.innerText =`${pscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Scissors`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Paper`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You won this round! Keep it up!`;
        player.src = "img/scissors.jpg";
        comp.src = "img/paper.jpg";
    }

    else if(playerChoice === "SCISSORS" && computerPick === "rock"){
        counter++;
        cscore++;
        computerScore.innerText =`${cscore}`;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Scissors`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Rock`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `You lost this round!`;
        player.src = "img/scissors.jpg";
        comp.src = "img/rock.jpg";
    }
    else if(playerChoice === "SCISSORS" && computerPick === "scissors"){
        counter++;
        const playerHistoryAppend = document.createElement('p');
        playerHistoryAppend.classList.add(`pround`)
        playerHistoryAppend.textContent = `Round ${counter} Scissors`;
        playerHistory.appendChild(playerHistoryAppend);

        const computerHistoryAppend = document.createElement('p');
        computerHistoryAppend.classList.add(`cround`);
        computerHistoryAppend.textContent = `Round ${counter} Scissors`;
        computerHistory.appendChild(computerHistoryAppend);
        commentary.innerText = `This round is a draw!`;
        player.src = "img/scissors.jpg";
        comp.src = "img/scissors.jpg";
    }
    round.innerText = counter;
}

let victoryAudio = new Audio("Audio/Victory.mp3");
let defeatAudio = new Audio("Audio/Defeat.mp3");
let drawAudio = new Audio("Audio/Draw.mp3");
let rockClick = new Audio("Audio/Crumbling.mp3");
let paperClick = new Audio("Audio/Waving_Paper.mp3");
let scissorsClick = new Audio("Audio/Scissor.mp3")
let startClick = new Audio("Audio/Click.mp3")

rock.addEventListener("click", ()=> {
    rockClick.pause();
    rockClick.play();
    rockClick.currentTime = 1;
    game("rock");
    if(counter === 5){
        if(pscore>cscore){
            victoryAudio.pause();
            victoryAudio.play();
            commentary.innerText = "Congratulations! You won the game!";
            modalCommentary.innerText = "Congratulations! You won the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else if(pscore<cscore){
            defeatAudio.pause();
            defeatAudio.play();
            commentary.innerText = "You lost the game!";
            modalCommentary.innerText = "You lost the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else {
            drawAudio.pause();
            drawAudio.play();
            commentary.innerText = "The game ends in a draw!";
            modalCommentary.innerText = "The game ends in a draw!";
            modalCommentary.innerText = "The game ends in a draw!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
    }
});

paper.addEventListener("click", ()=> {
    game("paper");
    paperClick.pause();
    paperClick.play();
    paperClick.currentTime = 3;
    if(counter === 5){
        if(pscore>cscore){
            victoryAudio.pause();
            victoryAudio.play();
            commentary.innerText = "Congratulations! You won the game!";
            modalCommentary.innerText = "Congratulations! You won the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else if(pscore<cscore){
            defeatAudio.pause();
            defeatAudio.play();
            commentary.innerText = "You lost the game!";
            modalCommentary.innerText = "You lost the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else {
            drawAudio.pause();
            drawAudio.play();
            commentary.innerText = "The game ends in a draw!";     
            modalCommentary.innerText = "The game ends in a draw!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
    }
});

scissors.addEventListener("click", ()=> {
    game("scissors");
    scissorsClick.pause();
    scissorsClick.play();
    scissorsClick.currentTime = 3;
    if(counter === 5){
        if(pscore>cscore){
            victoryAudio.pause();
            victoryAudio.play();
            commentary.innerText = "Congratulations! You won the game!";
            modalCommentary.innerText = "Congratulations! You won the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else if(pscore<cscore){
            defeatAudio.pause();
            defeatAudio.play();
            commentary.innerText = "You lost the game!";
            modalCommentary.innerText = "You lost the game!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
        else {
            drawAudio.pause();
            drawAudio.play();
            commentary.innerText = "The game ends in a draw!";           
            modalCommentary.innerText = "The game ends in a draw!";
            restartmodal.style.display = "block";
            restartmodal.style.opacity = 1;
            restartmodal.style.zIndex = 1;
            document.getElementById('rock').disabled=true;
            document.getElementById('paper').disabled=true;
            document.getElementById('scissors').disabled=true;
        }
    }
});

function reset(){         
            const removePlayerHistory = playerHistory.getElementsByClassName('pround');
            const removeComputerHistory = computerHistory.getElementsByClassName('cround');

            for(i=0;i<5;++i){
               playerHistory.removeChild(removePlayerHistory[0]);
               computerHistory.removeChild(removeComputerHistory[0]);
            }  
            counter = 0;
            pscore = 0;
            cscore = 0;
            playerScore.innerText = 0;
            computerScore.innerText = 0;
            restartmodal.style.opacity = 0;
            round.innerText = "0";
            commentary.innerText ="";
            modalCommentary.innerText="";
            player.src = "img/player.png";
            comp.src = "img/robot.png";
            restartmodal.style.zIndex = -1;
            document.getElementById('rock').disabled=false;
            document.getElementById('paper').disabled=false;
            document.getElementById('scissors').disabled=false;

}

    restart.addEventListener("click", () => {
        startClick.pause();
        startClick.play();
        reset();
})

    start.addEventListener("click", () => {
        document.querySelector('.wrapper').style.display =  "block";
        document.querySelector('.startButton').style.display = "none";
        startClick.pause();
        startClick.play();
    })

    quit.addEventListener("click", () => {
        startClick.pause();
        startClick.play();
        document.querySelector('.wrapper').style.display = "none"; 
        start.style.display = "block";
        reset();
    })

  
