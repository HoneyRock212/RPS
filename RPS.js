//Function for the computer  that chooses rock, paper or scissors randomly
function computerPlay(){
var random = Math.floor(Math.random()*3)+1;

if(random === 1){
return "Rock";
}
else if(random === 2){
return "Paper";
}
else {
return "Scissors";
}
}


const container = document.querySelector('.text-container');
const content1 = document.createElement('p');
const content2 = document.createElement('p');
const content3 = document.createElement('p');
playerScore = 0;
computerScore = 0;
gameCounter = 0;

//Function for playing the rock, paper or scissors game and prompts the player to choose their selection for the game and return a string depending on the result
function playRound(playerSelection, computerSelection = computerPlay()){
var playerChoice = playerSelection.toUpperCase();
//Outcome for paper winning or losing 
if(playerChoice === "PAPER" && computerSelection === "Rock"){
    
    playerScore++;
}

else if(playerChoice === "PAPER" && computerSelection === "Scissors"){
  
    computerScore++;
}

//Outcome for rock winning or losing 
if(playerChoice === "ROCK" && computerSelection === "Scissors"){
  
    playerScore++;

}

else if(playerChoice === "ROCK" && computerSelection === "Paper"){
    
    computerScore++;

}

//Outcome for scissors winning or losing

if(playerChoice === "SCISSORS" && computerSelection === "Paper"){
   
    playerScore++;

}

else if(playerChoice === "SCISSORS" && computerSelection === "Rock"){
    
    computerScore++;

}
//outcome for a draw
else if (playerChoice.toLowerCase() === computerSelection.toLowerCase()) {
   
}
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener("click", () => {
   if(gameCounter == 5){
        if(playerScore>computerScore){
            alert(`The player won with a score of ${playerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;       
         } 
            else {
            alert(`The computer won with a score of ${computerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;        
        }
   }
    playRound("rock");
    gameCounter++;
    
}
);
paper.addEventListener("click", () => {
    if(gameCounter == 5){
        if(playerScore>computerScore){
            alert(`The player won with a score of ${playerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;
        } else {
            alert(`The computer won with a score of ${computerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;
        }
   }
    playRound("paper");
    gameCounter++;
}
);
scissors.addEventListener("click", () => {
    if(gameCounter == 5){
        if(playerScore>computerScore){
            alert(`The player won with a score of ${playerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;        } 
            else {
            alert(`The computer won with a score of ${computerScore}`);
            gameCounter = 0;
            playerScore = 0;
            computerScore = 0;       
         }
   }
    playRound("scissors");
    gameCounter++;
}
);