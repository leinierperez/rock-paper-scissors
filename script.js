let buttons = document.querySelectorAll('button');
let playerPic = document.getElementById('player-choice');
let computerPic = document.getElementById('computer-choice');
buttons.forEach((button) => {
	let playerSelection = button.id;
	button.addEventListener('click', (e) => playRound(playerSelection));
});

function playRound(playerSelection) {
	let computerSelection = computerPlay();
	let playerSelect = playerSelection.toUpperCase();
	let computerSelect = computerSelection.toUpperCase();
	let playerWin = false;
	if (playerSelect === computerSelect) {
		playerPic.src = '/images/' + playerSelection + '.png';
		computerPic.src = '/images/' + computerSelection + '_left.png';
		playerWin = false;
		return playerWin;
	} else if (playerSelect === 'ROCK' && computerSelect === 'PAPER') {
		playerPic.src = '/images/rock.png';
		computerPic.src = '/images/paper_left.png';
		return playerWin;
	} else if (playerSelect === 'ROCK' && computerSelect === 'SCISSORS') {
		playerPic.src = '/images/rock.png';
		computerPic.src = '/images/scissors_left.png';
		playerWin = true;
		return playerWin;
	} else if (playerSelect === 'PAPER' && computerSelect === 'SCISSORS') {
		playerPic.src = '/images/paper.png';
		computerPic.src = '/images/scissors_left.png';
		return playerWin;
	} else if (playerSelect === 'PAPER' && computerSelect === 'ROCK') {
		playerPic.src = '/images/paper.png';
		computerPic.src = '/images/rock_left.png';
		playerWin = true;
		return playerWin;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'ROCK') {
		playerPic.src = '/images/scissors.png';
		computerPic.src = '/images/rock_left.png';
		return playerWin;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'PAPER') {
		playerPic.src = '/images/scissors.png';
		computerPic.src = '/images/paper_left.png';
		playerWin = true;
		return playerWin;
	}
}

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
