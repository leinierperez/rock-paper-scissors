let buttons = document.querySelectorAll('button');
let playerPic = document.getElementById('player-choice');
let computerPic = document.getElementById('computer-choice');
let displayPlayerScore = document.getElementById('player-score');
let displayComputerScore = document.getElementById('computer-score');
let xBeatsY = document.getElementById('x-beats-y');
let whoWon = document.getElementById('who-won');

buttons.forEach((button) => {
	let playerSelection = button.id;
	button.addEventListener('click', (e) => playRound(playerSelection));
});

function playRound(playerSelection) {
	let computerSelection = computerPlay();
	let playerSelect = playerSelection.toUpperCase();
	let computerSelect = computerSelection.toUpperCase();
	let playerWin = false;
	let computerWin = false;
	if (playerSelect === computerSelect) {
		playerPic.src = `/images/${playerSelection}.png`;
		computerPic.src = `/images/${computerSelection}_left.png`;
		playerWin = false;
		computerWin = false;
	} else if (playerSelect === 'ROCK' && computerSelect === 'PAPER') {
		playerPic.src = '/images/rock.png';
		computerPic.src = '/images/paper_left.png';
		playerWin = false;
		computerWin = true;
	} else if (playerSelect === 'ROCK' && computerSelect === 'SCISSORS') {
		playerPic.src = '/images/rock.png';
		computerPic.src = '/images/scissors_left.png';
		playerWin = true;
		computerWin = false;
	} else if (playerSelect === 'PAPER' && computerSelect === 'SCISSORS') {
		playerPic.src = '/images/paper.png';
		computerPic.src = '/images/scissors_left.png';
		playerWin = false;
		computerWin = true;
	} else if (playerSelect === 'PAPER' && computerSelect === 'ROCK') {
		playerPic.src = '/images/paper.png';
		computerPic.src = '/images/rock_left.png';
		playerWin = true;
		computerWin = false;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'ROCK') {
		playerPic.src = '/images/scissors.png';
		computerPic.src = '/images/rock_left.png';
		playerWin = false;
		computerWin = true;
	} else if (playerSelect === 'SCISSORS' && computerSelect === 'PAPER') {
		playerPic.src = '/images/scissors.png';
		computerPic.src = '/images/paper_left.png';
		playerWin = true;
		computerWin = false;
	}
	if (isGameOver) {
		resetGame();
		isGameOver = false;
	}
	game(playerWin, computerWin, playerSelection, computerSelection);
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
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
function game(playerWin, computerWin, playerSelection, computerSelection) {
	console.log(playerSelection);
	console.log(computerSelection);
	if (playerWin) {
		playerScore = playerScore + 1;
		displayPlayerScore.innerHTML = `Player Score: ${playerScore}`;
		xBeatsY.innerHTML = `${playerSelection} Beats ${computerSelection}`;
	} else if (computerWin) {
		computerScore = computerScore + 1;
		displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;
		xBeatsY.innerHTML = `${computerSelection} Beats ${playerSelection}`;
	} else if (playerWin === false && computerWin === false) {
		xBeatsY.innerHTML = `It's a Draw!`;
	}

	if (playerScore === 5) {
		whoWon.innerHTML = 'Player Wins!!!';
		isGameOver = true;
	} else if (computerScore === 5) {
		whoWon.innerHTML = 'Computer Wins!!!';
		isGameOver = true;
	}
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	whoWon.innerHTML = 'Welcome to Rock Paper Scissors';
	displayPlayerScore.innerHTML = `Player Score: ${playerScore}`;
	displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;
	xBeatsY.innerHTML = 'Select a Choice to Start another Game';
}
