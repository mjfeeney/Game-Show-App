# Game-Show-App

This is a browser-based, word guessing game: "Phrase Hunter." Using JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Code chooses a random phrase, splits the phrase into letters, and puts those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

Extra Credit - Custom Styles:

- Changed font-family to "Tahoma"
- Added animation to #game-over-message
- Addes spin animation to correctly guessed letters.  Animation added to .show class
- Changed backgrounds of .start overlay, .win and .lose overlays to background images to go with the theme of phrases to guess
- Added box shadows to the keys


