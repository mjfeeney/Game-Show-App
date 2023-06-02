/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


// Declaration
class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }

    /**
    * Adds li elements to index.html for each individual letter of the random phrase.
    */
    addPhraseToDisplay() {
      const phrase_section = document.querySelector("#phrase ul");

      for(let i = 0; i < this.phrase.length; i ++) {
        if(this.phrase[i] === ' ') {
          let space_li = `<li class="space"> </li>`;
          phrase_section.insertAdjacentHTML('beforeend', space_li);
        } else {
          let letter_li = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
          phrase_section.insertAdjacentHTML('beforeend', letter_li);
        }
      };
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
      // Checks to see if the letter selected by the player matches a letter in the phrase.
      let result = game.activePhrase.phrase.includes(letter);
  
      if(result) {
        return true;
      } else {
        return false;
      }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
      let result = game.activePhrase.phrase.includes(letter);
      let matchedClass = `.${letter}`;
     
      // if letter has class "letter", replace each selected element's `hide` CSS class with the `show` CSS class.
      if(result === true) {
        const matchedLetter = document.querySelectorAll(matchedClass);
        matchedLetter.forEach(el => el.classList.remove("hide"));
        matchedLetter.forEach(el => el.classList.add("show"));
      }
    };
      

};












