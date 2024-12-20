document.getElementById("rock").addEventListener("click", () => { playRound('rock'); });
document.getElementById("paper").addEventListener("click", () => { playRound('paper') });
document.getElementById("scissors").addEventListener("click", () => { playRound('scissors') });
document.getElementById("reset").addEventListener("click", () => { resetGame() });

function getComputerChoice() {
     const randomNumber = Math.floor(Math.random() *3)+1
     if ( randomNumber === 1) {
          return "rock";
     } else if (randomNumber === 2) {
          return "paper";
     } else {
          return "scissors";
     }
};
let gameStarted = false;
let userScore = 0;
let computerScore = 0;

function announceScore(userScore, computerScore) {
          if (userScore == computerScore) {
               document.getElementById("announceWinner").innerText=("The game was a tie!")
          } else if (userScore > computerScore) {
               document.getElementById("announceWinner").innerText=("You beat the machine!")
          } else {
               document.getElementById("announceWinner").innerText=("You lost. Better luck next time")
          }
     setTimeout(() => {
          resetGame();
     }, 60000);
};

function resetGame() {
     userScore = 0;
     computerScore = 0;
     document.getElementById("score").innerText = "Your score: 0. Computer score: 0";
     document.getElementById("result").innerHTML = "";
     document.getElementById("announceWinner").innerText = "Best of 5";
     gameStarted = false;
};

function playRound(userChoice) {
     if (!gameStarted) {
          gameStarted = true;
     }
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
     document.getElementById("score").innerText=(`Your score: ${userScore}. Computer score: ${computerScore}`);
     
     if (userScore === 5 || computerScore === 5) {
          announceScore(userScore, computerScore);
     };
};