/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Declaration
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("The dude abides"), 
            new Phrase("This aggression will not stand"), 
            new Phrase("Obviously you are not a golfer"),
            new Phrase("The rug really tied the room together"),
            new Phrase("I am the walrus")
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases array
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    /**
    * Hides the start screen overlay and displays the game board
    * Sets the 'activePhrase` property to a random phrase
    * Calls the `addPhraseToDisplay()` method on the active phrase
    */
    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
       
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move, checks to see if the player has revealed all of the letters in the active phrase. 
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let totalLetters = this.activePhrase.phrase;
        let newString = totalLetters.replace(/ /g,""); 
        let length = newString.length;
        const totalMatchedLetters = document.querySelectorAll("#phrase .show").length;
        // console.log(totalLetters);
        // console.log(totalMatchedLetters);
        if(length === totalMatchedLetters) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(letter) {
        const scoreboard = document.querySelector('[src="images/liveHeart.png"]');
     
        if(this.activePhrase.checkLetter(letter) === false) {
            scoreboard.src = "images/lostHeart.png";
            this.missed += 1;
            
            // const tries = document.querySelectorAll('[src="images/liveHeart.png"]');
            if(this.missed == 5) {
                this.gameOver(false);
            }
        }
    };

   /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById("overlay");
        const gameOverMessage = document.getElementById("game-over-message");
        overlay.style.display = "flex";

        let removeOverlayClass = function(e) {
            overlay.classList.remove(e);
        };
        let addOverlayClass = function(e) {
            overlay.classList.add(e);
        };

        removeOverlayClass("start");
        
        if(gameWon === true) {
            removeOverlayClass("lose");
            addOverlayClass("win");
            gameOverMessage.innerHTML = "Great job! You've guessed it!";
        } else {
            removeOverlayClass("win");
            addOverlayClass("lose");
            gameOverMessage.innerHTML = "Condolences! The bums lost!";
        }

        // Resetting the gameboard - get app ready for a new game
        this.missed = 0;
        const phrase_section = document.querySelector("#phrase ul");
        const enableBtns = document.querySelectorAll(".key");
        const resetScoreboard = document.querySelectorAll('[src="images/lostHeart.png"]');

        phrase_section.replaceChildren();

        enableBtns.forEach(key => key.classList.remove("chosen", "wrong"));
        enableBtns.forEach(key => key.disabled = false);

        resetScoreboard.forEach(life => life.src = "images/liveHeart.png");
        
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        let buttonLetter = button.innerHTML;
        let letterCheck = this.activePhrase.checkLetter(buttonLetter);
        
        if(letterCheck === false) {
            button.classList.add("wrong");
            this.removeLife();
        } else {
            button.classList.add("chosen");
            this.activePhrase.showMatchedLetter(buttonLetter);

            if(this.checkForWin() === true) {
                this.gameOver(true);
            }
        }
    };

}






