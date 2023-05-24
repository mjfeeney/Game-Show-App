/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
    }

    missed = 0;
    phrases = [
        new Phrase("Phrase number one"), 
        new Phrase("This is a second phrase"), 
        new Phrase("New phrase NUMBER 3")
    ];
    activePhrase = null;

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    startGame() {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();

    };
}






