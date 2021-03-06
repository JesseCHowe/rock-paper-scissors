function computerPlay() {
  let numberOfChoices = 3;
  choice = function() {
    return Math.floor(Math.random() * Math.floor(numberOfChoices));
  };
  switch (choice()) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let _playerSelection = playerSelection.toLowerCase();

  switch (true) {
    case _playerSelection == "rock" && computerSelection == "paper":
    case _playerSelection == "paper" && computerSelection == "scissors":
    case _playerSelection == "scissors" && computerSelection == "rock":
      return -1;
      break;

    case _playerSelection == "paper" && computerSelection == "rock":
    case _playerSelection == "scissors" && computerSelection == "paper":
    case _playerSelection == "rock" && computerSelection == "scissors":
      return 1;
      break;

    case _playerSelection == computerSelection:
      return 0;
      break;

    default:
      return `${playerSelection} is not an option. Please choose paper, rock, or scissors.`;
  }
}

const game = () => {
  let bestOf = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("choose paper, rock, or scissors");
    let computerSelection = computerPlay();
    bestOf += playRound(playerSelection, computerSelection);
  }
  return bestOf > 0 ? "you Win!" : "you Lose!";
};
