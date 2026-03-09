// Game logic for the Escape Room puzzle

class Game {
    constructor() {
        this.players = [];
        this.isGameActive = false;
    }

    startGame() {
        this.isGameActive = true;
        console.log('The game has started!');
    }

    addPlayer(playerName) {
        this.players.push(playerName);
        console.log(`${playerName} has joined the game.`);
    }

    endGame() {
        this.isGameActive = false;
        console.log('The game has ended.');
    }
}

// Example usage
const game = new Game();
game.startGame();
game.addPlayer('Alice');
game.addPlayer('Bob');
game.endGame();