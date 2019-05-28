/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser  */

/*
for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard. */

//introduction div
const divOverlay = document.getElementById('overlay');

//nr of letters
const lettersLength = document.querySelectorAll('.keyrow')[0].children.length + document.querySelectorAll('.keyrow')[1].children.length + document.querySelectorAll('.keyrow')[2].children.length;

//arr of letters
const arrOfLetters0 = document.querySelectorAll('.keyrow')[0].children;
const arrOfLetters1 = document.querySelectorAll('.keyrow')[1].children;
const arrOfLetters2 = document.querySelectorAll('.keyrow')[2].children;






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
       // const divOverlay = document.getElementById('overlay');
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
    
    
    
/* REMOVE LIFE
`removeLife()`: This method removes a life from the scoreboard, by replacing one
of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
folder) and increments the `missed` property. If the player has five missed
guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
method.

//Test:
To test the `removeLife()` method, I simply called the method in the console to test that it
properly updated a heart image in the scoreboard (indicating that a life was "lost"):  game.removeLife()

Then I called the `removeLife()` method four more times to test that the game would end and
display the "lost" message:
*/    

/* GAME OVER    
    `gameOver()`: This method displays the original start screen overlay, and
depending on the outcome of the game, updates the overlay `h1` element with a
friendly win or loss message, and replaces the overlay’s `start` CSS class with
either the `win` or `lose` CSS class.
*/    
    
    //TODO: something wrong with color of game won/lose/start.... error here.
    
        gameOver(gameWon) {
            
         let gameWonn = false;
            //Show the introduction div again.
            divOverlay.style.visibility="visible"; //ok.
            
            if(this.missed===5){
                //grab h1-element and change its textcontent
                document.getElementById('game-over-message').textContent='Sorry, better luck next time'; //ok.
                
                //change/replace color
                //divOverlay.classList.replace('start', 'lose'); //ok.
                    divOverlay.classList.toggle('lose');
            }
            
            else{
             document.getElementById('game-over-message').textContent='Congratulations, you won';
                
                //change color
                //divOverlay.classList.replace('start', 'win'); //ok.
                    divOverlay.classList.toggle('win');
                gameWonn = true;
            }

        return gameWonn;
    } //end of gameOver()  //ok.
    
    removeLife() {
                
        //select the li element that we're at(depending on how many lives we've lost). Then select the first child of that li element which is the img, then alter the src value to lostHeart.
        document.querySelectorAll('.tries')[this.missed].children[0].src = "images/lostHeart.png"; //ok
        
        //increment the `missed` property.
           this.missed++; 
            
        /*
        If the player has five missed
        guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
        */
        
        if(this.missed===5){ 
            this.gameOver(); 
        }
            
} //end of removeLife
        
    
    //STEP 11:
    handleInteraction(button) {
        
        //console.log(button); //ok
        //console.log(button.textContent); //ok
        
    //Disable the selected letter’s onscreen keyboard button.
        button.disabled = true; //ok
        
        //If the phrase does not include the guessed letter, add the `wrong` CSS class to the
        //selected letter's keyboard button and call the `removeLife()` method.    
            if(!(this.activePhrase.checkLetter(button.textContent))){ //ok
            
            button.classList.toggle('wrong'); //ok
            this.removeLife();
        
            }
        
            //If the phrase includes the guessed letter, add the `chosen` CSS class to the selected
            //letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and then
        
            //call the `checkForWin()` method. If the player has won the game, also call the
            //`gameOver()` method.
            if(this.activePhrase.checkLetter(button.textContent)){
                
             button.classList.toggle('chosen');
             this.activePhrase.showMatchedLetter(button.textContent);
                
               
              if(game.checkForWin()){ //works.
                  
                  game.gameOver(); //ok.
              }
                
            }
            
        
        
    } //end of handleInteraction
    
        
    
} //end of class Game









