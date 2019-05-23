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
    
    
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
        let liElements = [];
        liElements = document.querySelector('ul').children; //grabs ok
        
        //keeps track of letters that have been revealed
        let okLetters =0;
        //keeps track of nr of spaces in the phrase
        let spaceElements = 0;
        
        let winOk = false;
    
    //scroll through all li elements and check how many okLetters we have    
    for(let i=0; i<liElements.length; i++){


        if(liElements[i].classList.contains('show')){ 
                
             
            //okLetters is added by 1 
            okLetters++;
            
        }

        //collect li element spaces
        if(liElements[i].classList.contains('space')){
            spaceElements++;
        }
        
    }//end of loop
    
    //Now: if okLetters is equal to liElements.length minus spaceElements then player has won.
    if(okLetters === liElements.length - spaceElements ){
        
        winOk = true;
    }
    
    //return false or true.
    return winOk;
    
    
} //end of checkForWin()        //seems to work. ok.
    
    
    
/*
`removeLife()`: This method removes a life from the scoreboard, by replacing one
of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
folder) and increments the `missed` property. If the player has five missed
guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
method.

*/    
    removeLife() {
        
        
        
    }
    
    gameOver() {
        
        
        
    }
    
        
    
} //end of class Game









