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

// --------------------------------------
// FIXED INTERACTION FUNCTIONS
// --------------------------------------

function clickObject(id) {
    const interaction = document.getElementById("interaction");
    interaction.innerHTML = `You clicked on: ${id}`;

    if (id === "cabinet") {
        interaction.innerHTML += "<br>The cabinet is locked.";
    }
    if (id === "terminal") {
        interaction.innerHTML += "<br>The terminal screen lights up.";
    }
}

function showHint() {
    document.getElementById("interaction").innerHTML =
        "Hint: Inspect objects carefully. Some hide clues.";
}

function submitAnswer() {
    const val = document.getElementById("answer").value.trim();
    document.getElementById("interaction").innerHTML =
        `You entered: ${val}`;
}
