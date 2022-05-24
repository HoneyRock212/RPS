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

//Function for playing the rock, paper or scissors game and prompts the player to choose their selection for the game and return a string depending on the result
function playRound(playerSelection, computerSelection = computerPlay()){
var playerChoice = playerSelection.toUpperCase();
//Outcome for paper winning or losing 
if(playerChoice === "PAPER" && computerSelection === "Rock"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`Congratulations! You won because ${playerChoice.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
    playerScore += 1;
}

else if(playerChoice === "PAPER" && computerSelection === "Scissors"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`You lost because ${computerSelection.toLowerCase()} beats ${playerChoice.toLowerCase()}`);
    computerScore += 1;
}

//Outcome for rock winning or losing 
if(playerChoice === "ROCK" && computerSelection === "Scissors"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`Congratulations! You won because ${playerChoice.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
    playerScore += 1;
}

else if(playerChoice === "ROCK" && computerSelection === "Paper"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`You lost because ${computerSelection.toLowerCase()} beats ${playerChoice.toLowerCase()}`);
    computerScore += 1;
}

//Outcome for scissors winning or losing

if(playerChoice === "SCISSORS" && computerSelection === "Paper"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`Congratulations! You won because ${playerChoice.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
    playerScore += 1;
}

else if(playerChoice === "SCISSORS" && computerSelection === "Rock"){
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`);
    console.log(`You lost because ${computerSelection.toLowerCase()} beats ${playerChoice.toLowerCase()}`);
    computerScore += 1;
}
//outcome for a draw
else if (playerChoice.toLowerCase() === computerSelection.toLowerCase()) {
    console.log(`The computer chose ${computerSelection.toLowerCase()}`);
    console.log(`The player chose ${playerChoice.toLowerCase()}`); 
    console.log("It's a draw!");
}
}

//Function for calculating the overall winner of the 5 rounds and to start the game
function game(){
    globalThis.playerScore = 0;
    globalThis.computerScore = 0;   
    for (let i = 0; i<6; i++){    
    playRound(prompt("Please enter your choice for the round"), computerPlay());    
    }
    if(playerScore>computerScore){
    alert("Congratulations! You won the game!");
    }
    else if(playerScore<computerScore){
    alert("You lost the game!");
    }
    else {
    alert("It's a draw!");
    }
}