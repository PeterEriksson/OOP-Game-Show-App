/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
    
    
//    startGame(){
//        //grab div with id 'overlay'
//        const divOverlay = document.getElementById('overlay');
//        //hide 'overlay'
//        divOverlay.style.visibility="hidden";
//        
//        getRandomPhrase();
//        
//    }
    
}


const newG = new Game();
const phraseEl = newG.getRandomPhrase;
//console.log(phraseEl);
//ok.






