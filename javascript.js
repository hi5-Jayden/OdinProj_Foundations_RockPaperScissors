function getComputerChoice() {
  let key = Math.random();
  // console.log(`key is: ${key}`);
  if (key < 0.3) {
    console.log("Computer choice: rock");
    return "rock";
  } else if (0.3 <= key && key <= 0.6) {
    console.log("Computer choice: paper");
    return "paper";
  } else {
    console.log("Computer choice: scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt(
    "Rock / Paper / Scissors. Enter your choice:"
  ).toLowerCase();
  console.log(`Your choice: ${userInput}`);
  return userInput;
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        `You are Tied! Human: ${humanScore} / Computer: ${computerScore}`
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore += 1;
      console.log(
        `Human Win! Human: ${humanScore} / Computer: ${computerScore}`
      );
    } else if (
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "paper")
    ) {
      computerScore += 1;
      console.log(
        `Computer Win! Computer: ${computerScore} / Human: ${humanScore}`
      );
    }
  }
  function finalScore(computerScore, humanScore) {
    if (computerScore == humanScore) {
      console.log("YOU ARE TIED");
    } else if (computerScore > humanScore) {
      console.log("Computer beats Human");
    } else if (computerScore < humanScore) {
      console.log("Human beat Computer");
    }
  }

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i}`);
    playRound(getHumanChoice(), getComputerChoice());
  }
  finalScore(computerScore, humanScore);
}
playGame();
