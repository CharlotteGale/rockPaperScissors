document.getElementById("rock").addEventListener("click", () => { playRound('rock'); });
document.getElementById("paper").addEventListener("click", () => { playRound('paper') });
document.getElementById("scissors").addEventListener("click", () => { playRound('scissors') });

function getComputerChoice() {
     const randomNumber = Math.floor(Math.random() *3)+1
     if ( randomNumber === 1) {
          return "rock";
     } else if (randomNumber === 2) {
          return "paper";
     } else {
          return "scissors";
     }
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice) {
     let computerChoice = getComputerChoice();
     if (userChoice === computerChoice) {
          document.getElementById("result").innerHTML=("It's a tie!");
     } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "paper" && computerChoice === "rock") ||
          (userChoice === "scissors" && computerChoice === "paper")
     ) {
          document.getElementById("result").innerHTML=(`You win! Your ${userChoice} beats ${computerChoice}`);
          userScore++;
     } else {
          document.getElementById("result").innerHTML=(`You lose! Your ${userChoice} loses to ${computerChoice}`);
          computerScore++;
     }
     document.getElementById("score").innerHTML=(`Your score: ${userScore}. Computer score: ${computerScore}`);
}

playRound();