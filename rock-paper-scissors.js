// ## `rock-paper-scissors.js`

// Let's play a classic game of rock, paper, scissors!

// Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

// The players can only input "rock", "paper", and "scissors".  Anything else should result in a failure message getting logged to the screen.
// After both players input their options, use console.log() to print the player who emerged victorious.

// For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock.  If both players input the same answer, it should result in a draw.

// An example game
// ```
// Player 1, enter "rock", "paper", or "scissors":
// > rock
// Player 2, enter "rock", "paper", or "scissors":
// > paper
// Player 2 wins!
// ```

const prompt = require('prompt-sync')({sigint: true});

let player1 = String(prompt(`First player turn (rock, paper or scissors): `))

let player2 = String(prompt(`Second player turn (rock, paper or scissors): `))

// 1) tie; 2) rock crushes scissors; 3) paper covers rock; 4) scissors cut paper.

if (player1 === "rock" && player2 === "scissors") {
    console.log(`Player 1 wins!`)
} else if (player1 === "scissors" && player2 === "paper") {
    console.log(`Player 2 wins!`)
} else if (player1 === "paper" && player2 === "rock") {
    console.log(`Player 1 wins!`)
} else if (player1 === "rock" && player2 === "paper") {
    console.log (`Player 2 wins!`)
} else if (player1 === "scissors" && player2 === "paper") {
    console.log (`Player 1 wins!`)
} else if (player1 === "paper" && player2 === "scissors") {
    console.log (`Player 2 wins!`)
} else if (player1 === "paper" && player2 === "paper") {
    console.log (`Draw!`)
} else if (player1 === "scissors" && player2 === "scissors") {
    console.log (`Draw!`)
} else if (player1 === "rock" && player2 === "rock") {
    console.log (`Draw!`)
} else {
    console.log (`Error!`)
}
