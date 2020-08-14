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

	function noWinner() {
		playerWin = false;
		computerWin = false;
	}

	function playerWins() {
		playerWin = true;
		computerWin = false;
	}

	function computerWins() {
		playerWin = false;
		computerWin = true;
	}

	if (playerSelect === computerSelect) {
		noWinner();
	} else if (
		(playerSelect === 'ROCK' && computerSelect === 'SCISSORS') ||
		(playerSelect === 'PAPER' && computerSelect === 'ROCK') ||
		(playerSelect === 'SCISSORS' && computerSelect === 'PAPER')
	) {
		playerWins();
	} else if (
		(playerSelect === 'ROCK' && computerSelect === 'PAPER') ||
		(playerSelect === 'PAPER' && computerSelect === 'SCISSORS') ||
		(playerSelect === 'SCISSORS' && computerSelect === 'ROCK')
	) {
		computerWins();
	}

	setPics(playerSelect.toLowerCase(), computerSelect.toLowerCase());

	if (isGameOver) {
		resetGame();
		isGameOver = false;
	}
	game(playerWin, computerWin, playerSelection, computerSelection);
}

function setPics(playerSelect, computerSelect) {
	playerPic.src = `images/${playerSelect}.png`;
	computerPic.src = `images/${computerSelect}_left.png`;
}

function computerPlay() {
	let choices = [ 'Rock', 'Paper', 'Scissors' ];
	let randNum = Math.floor(Math.random() * choices.length);
	return choices[randNum];
}

let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
function game(playerWin, computerWin, playerSelection, computerSelection) {
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
