const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', playRound);
});

function computerPlay() {
	let randNum = Math.floor(Math.random() * 3);
	if (randNum === 0) {
		return 'Rock';
	} else if (randNum === 1) {
		return 'Paper';
	} else if (randNum === 2) {
		return 'Scissors';
	}
}

function playRound(playerSelection, computerSelection) {
	let playerSelect = playerSelection.toUpperCase();
	let computerSelect = computerSelection.toUpperCase();
	let playerWin = false;
	if (playerSelect === computerSelect) {
		playerWin = false;
		return playerWin;
	} else if (playerSelect === 'ROCK' && computerSelect === 'PAPER') {
		return playerWin;
	} else if (playerSelect === 'ROCK' && computerSelect === 'SCISSORS') {
		playerWin = true;
		return playerWin;
	} else if (playerSelect === 'PAPER' && computerSelect === 'SCISSORS') {
		return playerWin;
	} else if (playerSelect === 'PAPER' && computerSelect === 'ROCK') {
		playerWin = true;
		return playerWin;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'ROCK') {
		return playerWin;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'PAPER') {
		playerWin = true;
		return playerWin;
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
	if (playerScore > computerScore) {
		console.log('Player has won!');
	} else {
		console.log('Computer has won!');
	}
}
