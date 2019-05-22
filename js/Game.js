/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser  */

/*
for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard. */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('Life is like a box of chocolates'), new Phrase('To be or not to be'), new Phrase("I think therefore I am"), new Phrase('You only live once'), new Phrase("I would rather die of passion than of boredom")];
        this.activePhrase = null;
        
        
    }
    
 get getRandomPhrase() {
        const randomNr = Math.floor(Math.random() * 5); // returns a random integer from 0 to 4
        return this.phrases[randomNr]; //ok
    }
    
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        //grab div with id 'overlay'
        const divOverlay = document.getElementById('overlay');
        //hide 'overlay'
        divOverlay.style.visibility="hidden";
        
        /*
        calls the `getRandomPhrase()` method to select a Phrase object from the Game
        object’s array of phrases, and then adds the phrase to the gameboard by calling the
        `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase
        object. The selected phrase should be stored in the Game’s `activePhrase` property, so it can be
        easily accessed throughout the game.
        */
        let temp = this.getRandomPhrase;
        temp.addPhraseToDisplay();
        this.activePhrase = temp;
        
        
    }
    
    
    handleInteraction() {
        
        
    }
    
} //end of class Game









