
/* Event listeners added to buttons; */

document.querySelector("#rock").addEventListener("click", () => playRound("rock", computerPlay()));
document.querySelector("#paper").addEventListener("click", () => playRound("paper", computerPlay()));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors", computerPlay()));
document.querySelector("#reset").addEventListener("click", () => reset());


// score animation function;
function anim(x) {
	if (x == "p") {
		document.querySelector("#rocky-score").classList.add("score-animation");
	}
	else if (x == "c") {
		document.querySelector("#apollo-score").classList.add("score-animation");
	}
	// after playing the animation, remove animation class;
	setTimeout(function () {
		document.querySelector("#rocky-score").classList.remove("score-animation");
		document.querySelector("#apollo-score").classList.remove("score-animation");
	}, 1200);

}



// to restart the game;
function reset() {
	computerScore = 0;
	playerScore = 0;
	document.querySelector("#reset").style = "visibility:hidden";
	document.querySelector("#status").innerHTML = "Select one;";
	updateScore();
}

let apolloWins = 0;
let rockyWins = 0;
scoreKeeping();

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
			document.querySelector("#result").innerHTML = "Apollo wins, paper beats rock!";
				result = 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
			document.querySelector("#result").innerHTML = "Rocky wins, rock beats scissors!";
				result = 2;
	  }	else if (playerSelection === 'paper' && computerSelection=== 'rock') {
			document.querySelector("#result").innerHTML = "Rocky wins, paper beats rock!";
				result = 2;
	  }	else if (playerSelection === 'paper' && computerSelection === 'scissors') {
			document.querySelector("#result").innerHTML = "Apollow wins, scissors beats paper!";
				result = 1;
	  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
			document.querySelector("#result").innerHTML = "Apollo wins, rock beats scissors!";
				result = 1;
		} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
			document.querySelector("#result").innerHTML = "Rocky wins, scissors beats paper!";
				result = 2;
	} 	else {
				result = 0;
				document.querySelector("#status").innerHTML = "It's a tie.";
	}
	 scoreKeeping();
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
}


// Keeping Score

function scoreKeeping() {
	document.querySelector("#rscore").innerHTML = rockyWins;
	document.querySelector('#ascore').innerHTML = apolloWins;
	if (rockyWins >= 5 && rockyWins > apolloWins) {
		alert('Yaay, you won!!!');
		document.querySelector("#reset").style = "visibility:visible";
	}
	if (apolloWins >= 5 && apolloWins > rockyWins) {
		alert('sorry, you lost this time!');
		document.querySelector("#reset").style = "visibility:visible";
	}


	//to reset focus after clicking;
	document.activeElement.blur();
}