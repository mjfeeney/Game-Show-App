/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Creates a new instance of the `Game` class and adds event listeners for the start button and onscreen keyboard buttons
let game;
const btn_reset = document.getElementById("btn__reset");
const keys = document.getElementById("qwerty");
let gameStarted = false;

btn_reset.addEventListener("click", function() {
    game = new Game();
    game.startGame();
    
    gameStarted = true;
});

keys.addEventListener('click', function (event) {
	if (event.target.matches(".key")) {
		game.handleInteraction(event.target);
	}
});


// Allows players to use their physical keyboard to enter guesses 
document.addEventListener('keydown', function (event) { 
    if(gameStarted === true) {
        const keyboardKeys = document.querySelectorAll('.key');
        for(let i=0; i<keyboardKeys.length; i++ ) {
            if (keyboardKeys[i].textContent === event.key && keyboardKeys[i].disabled === false) {
                game.handleInteraction(keyboardKeys[i]);
            }
        }
    }
    
});











