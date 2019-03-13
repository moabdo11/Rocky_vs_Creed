
const body = document.querySelector('body');
const playerChoices = document.querySelectorAll('.choiceButton');
const rockyScoreDisplay = document.querySelector('#rockyScore');
const apolloScoreDisplay = document.querySelector('#apolloScore');
const roundResultDisplay = document.querySelector('#roundOutcome')
const roundNumberDisplay = document.querySelector('#roundDisplay')
const matchResultDisplay = document.querySelector('#matchResult')
const resetButton = document.querySelector('#reset');
const secondButton = document.querySelector('#secondbutton');
let rockyChoice = '';

// Variable to keep round number
let roundNum = 0;
// Variable to keep Rocky score
let rockyScore = 0;
// Variable to keep Apollo score
let apolloScore = 0;
let roundOutcome;

// Game begins with reset
reset();

// Reset button event listener
resetButton.addEventListener('click', (e) => {
	reset();
});

// All variables and strings are reset
function reset() {
	rockyChoice = '';
	roundNum = 0;
	rockyScore = 0;
	apolloScore = 0;
	roundResultDisplay.textContent = 'CHOOSE YOUR PUNCH';
	matchResultDisplay.textContent = '';
	rockyScoreDisplay.textContent = rockyScore;
	apolloScoreDisplay.textContent = apolloScore;
	roundNumberDisplay.textContent = roundNum;

// Enabling Player Choices
	playerChoices.forEach((button) => {
		button.disabled = false;
	});

	body.className = '';
}

// Player Choices Event Listeners

playerChoices.forEach((button) => {
	button.addEventListener('click', (e) => {
		rockyChoice = button.id;
		playRound(rockyChoice, apolloPlay());
		updateScore();
	});
});

// Score Animation;

function animation(x) {
	if (x === "r") {
		document.querySelector("#rockyScore").classList.add("score-animation");
	}
	else if (x == "a") {
		document.querySelector("#apolloScore").classList.add("score-animation");
	}
	// After playing the animation, remove animation class;

	setTimeout(function () {
		document.querySelector("#rockyScore").classList.remove("score-animation");
		document.querySelector("#apolloScore").classList.remove("score-animation");
	}, 1200);

}

// Apollo Random Selections

function apolloPlay() {
	let choices = ['rock', 'paper', 'scissors'];
	let apolloChoice = choices[Math.floor(Math.random() * choices.length)];
		return apolloChoice;
}


// Round by Round winner

function playRound(playerSelection, computerSelection) {
	if (playerSelection == "rock") {
		if (computerSelection == "paper") {
			roundOutcome = "Apollo wins this round! Paper beats rock.";
			animation("a");
		} else if (computerSelection == "scissors") {
			roundOutcome = "Rocky wins this round! Rock beats Scissors.";
			animation("r");
		} else {
			roundOutcome = "This round was a tie!";
		}
	}

	if (playerSelection == "paper") {
		if (computerSelection == "scissors") {
			roundOutcome = "Apollo wins this round! Scissors beats Paper.";
			animation("a");
		} else if (computerSelection == "rock") {
			roundOutcome = "Rocky wins this round! Paper beats Rock.";
			animation("r");
		} else {
			roundOutcome = "This round was a tie!";
		}
	}

	if (playerSelection == "scissors") {
		if (computerSelection == "rock") {
			roundOutcome = "Apollo wins this round! Rock beats Scissors.";
			animation("a");
		} else if (computerSelection == "paper") {
			roundOutcome = "Rocky wins this round! Scissors beats Paper.";
			animation("r");
		} else {
			roundOutcome = "This round was a tie!";
		}
	}
	roundResultDisplay.textContent = roundOutcome;
}

function roundResult() {
	roundNumberDisplay.textContent = roundNum;

	if (roundOutcome.includes("Rocky wins") == true) {
		rockyScore++;
		rockyScoreDisplay.textContent = rockyScore;
	} else if (roundOutcome.includes("Apollo wins") == true) {
		apolloScore++;
		apolloScoreDisplay.textContent = apolloScore;
	}
}



// Continously updating the score

function updateScore() {
	++roundNum; // add to round counter each time updateScore() function is called

	if (roundNum < 12) { // if number of rounds is less than 12, update score based on who won the round
		roundResult();
	} else { // else, determine winner and disable player option buttons
		roundResult();
		matchWinner();
		playerChoices.forEach((button) => {
			button.disabled = true;
		});
	}
}


function toggleById() {
	if (roundNum < 12) {
		document.getElementById("container").style.display = 'inline';
	}
    else
	{
		document.getElementById("container").style.display = 'none';
		secondButton.classList.remove('hidden');
	}
}

// Determining the match winner based on totals

function matchWinner() {

	toggleById();
	if (rockyScore > apolloScore) {
		matchResult = `Rocky wins the match ${rockyScore} to ${apolloScore}!`;
		body.className += "rockywins";
	} else if (apolloScore > rockyScore) {
		matchResult = `Apollo wins the match ${apolloScore} to ${rockyScore}!`;
		body.className += "apollowins";
	} else {
		matchResult = "It was a tie.";
		body.className += "nowinner";
	}
	
	matchResultDisplay.textContent = matchResult;
}


