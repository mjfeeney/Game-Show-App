/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons

let game;
const btn_reset = document.getElementById("btn__reset");
const keys = document.getElementById("qwerty");

btn_reset.addEventListener("click", function() {
    game = new Game();
    game.startGame();
});

keys.addEventListener('click', function (event) {
	if (event.target.matches(".key")) {
		game.handleInteraction(event.target);
	}
});








