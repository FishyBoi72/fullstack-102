// Defines the hands array
const hands = ['rock', 'paper', 'scissors'];

// Defines the getHand function
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Defines 2 player objects
const player1 = {
    name: 'Player1',
    getHand: getHand // This will be replaced by user's choice
};

const player2 = {
    name: 'Player2',
    getHand: getHand
};

// Variables to track scores and rounds
let player1Score = 0;
let player2Score = 0;
let roundNumber = 1;

// playRound function that allows player 1 and 2 to get their "hands"
function playRound(player1Hand, player2) {
    const hand1 = player1Hand;
    const hand2 = player2.getHand();

    // Display hands played
    console.log(`${player1.name} played ${hand1}`);
    console.log(`${player2.name} played ${hand2}`);

    // Update UI with hands played
    document.getElementById('player1Hand').innerText = hand1;
    document.getElementById('player2Hand').innerText = hand2;

    // If both hands are equal, it's a draw
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}. It's a tie!`);
        return null;
    }

    // Decides winner based on which hand is played
    let winner = null;
    if (
        (hand1 === 'Rock' && hand2 === 'Scissors') ||
        (hand1 === 'Scissors' && hand2 === 'Paper') ||
        (hand1 === 'Paper' && hand2 === 'Rock')
    ) {
        winner = player1;
    } else {
        winner = player2;
    }

    // Logs the winner's name
    console.log(`${winner.name} wins!`);
    return winner;
}

// playGame function to update UI and keep track of scores and rounds
function playGame(player1Hand) {
    const winner = playRound(player1Hand, player2);

    if (winner === player1) {
        player1Score++;
    } else if (winner === player2) {
        player2Score++;
    }

    // Update UI with scores, rounds, and result
    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;
    document.getElementById('roundNumber').innerText = roundNumber++;

    let resultText = winner ? `${winner.name} wins this round!` : "It's a tie!";
    document.getElementById('roundResult').innerText = resultText;
}

// Set player name
document.getElementById('setNameButton').addEventListener('click', () => {
    const nameInput = document.getElementById('player1NameInput').value;
    if (nameInput) {
        player1.name = nameInput;
        document.getElementById('player1Name').innerText = nameInput;
    }
});

// Event listeners for the move buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

// Reset game
document.getElementById('resetButton').addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    roundNumber = 1;

    document.getElementById('player1Score').innerText = player1Score;
    document.getElementById('player2Score').innerText = player2Score;
    document.getElementById('roundNumber').innerText = roundNumber;
    document.getElementById('roundResult').innerText = '';
    document.getElementById('player1Hand').innerText = '';
    document.getElementById('player2Hand').innerText = '';
});
