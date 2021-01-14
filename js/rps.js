const signs = ['ROCK', 'PAPER', 'SCISSORS'];
let aiHand = aiRandomHand();
let playerHand = checkInput();
let aiScore = 0;
let playerScore = 0;

//Checks user input is included in signs array and converts to uppercase
function checkInput() {
	let hand;
	do {
			hand = prompt('Choose from ROCK, PAPER or SCISSORS');
			hand = hand.toUpperCase();
	} while (signs.includes(hand) === false)
		return hand;
}

//Randomly picks ai hand sign and returns it
function aiRandomHand () {
	let randomHand = Math.floor(Math.random() * signs.length);
	return signs[randomHand].toUpperCase();
}

//Plays game and returns result
function playGame(player, ai) {
	if ((player === 'ROCK' && ai === 'PAPER') || (player === 'PAPER' && ai === 'ROCK')) {
		if (player === 'PAPER') {
			playerScore++;
			return 'PAPER covers ROCK! You win!';
		} else {
			aiScore++;
			return 'PAPER covers ROCK! You lose!';
		}
	}	else if ((player === 'SCISSORS' && ai === 'PAPER') || (player === 'PAPER' && ai === 'SCISSORS')) {
		if (player === 'SCISSORS') {
			playerScore++;
			return 'SCISSORS cut PAPER! You win!';
		} else {
			aiScore++;
			return 'SCISSORS cut PAPER! You lose!';
		}
	}	else if ((player === 'SCISSORS' && ai === 'ROCK') || (player === 'ROCK' && ai === 'SCISSORS')) {
		if (player === 'ROCK') {
			playerScore++;
			return 'ROCK breaks SCISSORS! You win!';
		} else {
			aiScore++;
			return 'ROCK breaks SCISSORS! You lose!';
		}
	}	else {
			return `${player} vs ${ai}! It's a draw!`;		
		}
}

//////////////////Score counter--changes variable but resets each game due to browser refresh. Needs replay and end game functions. Add in display score.

//Prints result to page
document.querySelector('main').innerHTML = `<h2><strong>${playGame(playerHand, aiHand)}</strong></h2>`;