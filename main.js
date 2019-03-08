let compWins = 0;
let playerWins = 0;

function computerPlay() {
	let choices = ['rock', 'paper', 'scissors'];
	let compChoice = options[Math.floor(Math.random() * options.length)];
		return compChoice;
}

function playerPlay() {
	playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

	if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
			alert('Please enter "Rock", "Paper" or "Scissors"');
			playerPlay();
	}
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
			alert(`You lose. ${playerSelection} vs ${computerSelection}`); 
				result = 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
			alert(`You win. ${playerSelection} vs ${computerSelection}`);
				result = 2;
	  }	else if (playerSelection === 'paper' && computerSelection=== 'rock') {
			alert(`You win. ${playerSelection} vs ${computerSelection}`);
				result = 2;
	  }	else if (playerSelection === 'paper' && computerSelection === 'scissors') {
			alert(`You lose. ${playerSelection} vs ${computerSelection}`);
				result = 1;
	  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
			alert(`You lose. ${playerSelection} vs ${computerSelection}`);
				result = 1;
		} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
			alert(`You win. ${playerSelection} vs ${computerSelection}`);
				result = 2;
	} 	else {
				result = 0;
	}
	return result;
}

function perRoundPoints(result) {
	(result === 1) ? compWins++: (result === 2) ? playerWins++: 0;

}

function totalPoints(compWins, playerWins) {
  if (computerPoints > playerPoints) {
    alert(`You lose.  Computer: ${computerPoints} pts, Player: ${playerPoints} pts`);
  } else if (playerPoints > computerPoints) {
    alert(`You win. Congratulations! Player: ${playerPoints} pts, Computer: ${computerPoints} pts`);
  } else {
    alert(`Tie game. Computer: ${computerPoints} pts, Player: ${playerPoints} pts`);
  }
}

function game() {
	for (let i = 0; i < 5; i++) {
		let computerSelection = computerPlay();
		let playerSelection =playerPlay();
		let result = playRound(playerSelection, computerSelection);
			perRoundPoints();
	}
};