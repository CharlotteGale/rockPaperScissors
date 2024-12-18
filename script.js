console.log("successfully linked")

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
console.log(getComputerChoice())

function getHumanChoice() {
     let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase() 
     if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper") {
          return userChoice;
     } else {
          console.log("Invalid input, choose either Rock, Paper or Scissors!")
          return getHumanChoice();
     }
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
     if (humanChoice === computerChoice) {
          console.log("It's a tie!");
     } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
     ) {
          console.log(`You win! Your ${humanChoice} beats ${computerChoice}`);
          humanScore++;
     } else {
          console.log(`You lose! Your ${humanChoice} loses to ${computerChoice}`);
          computerScore++;
     }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`)

function playGame() {
     for (let i = 0; i < 5; i++) {
          const humanSelection = getHumanChoice();
          const computerSelection = getComputerChoice();
          playRound(humanSelection, computerSelection);
     }
     if (humanScore > computerScore) {
          console.log(`You win the game! Final scores are: You ${humanScore} v Computer ${computerScore}`);
     } else if (humanScore < computerScore) {
          console.log(`You lose the game! Final scores are: You ${humanScore} v Computer ${computerScore}`)
     } else {
          console.log(`It's a tie! Final scores are: You ${humanScore} v Computer ${computerScore}`)
     }
}

playGame();