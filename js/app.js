/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser  */

//GRADE I AM AIMING FOR: Just a pass. 
//FOR TESTING REASONS THE PHRASE IS LOGGED IN THE CONSOLE.
//   /Peter

/*
const gamee = new Game();
//console.log(gamee.phrases[2]);
gamee.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/
//ok


/*
const logPhrase = (phrase) => {
console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase);
logPhrase(game.getRandomPhrase);
logPhrase(game.getRandomPhrase);
logPhrase(game.getRandomPhrase);
logPhrase(game.getRandomPhrase);
*/
//ok

//const game = new Game();
//game.getRandomPhrase.addPhraseToDisplay();

//step 6
//const game = new Game();
//game.getRandomPhrase.addPhraseToDisplay();
//ok!

//step 7
//const game = new Game();
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
//ok!



    //test..    
    //let liElements = [];
    //liElements = document.querySelector('ul').children;

let game = '';
const button = document.getElementById('btn__reset');

//start game button click event
button.addEventListener('click', event => {
    
//player has already played a game:
    //Remove all `li` elements from the Phrase `ul` element.
        let ul = document.querySelector('ul');
        ul.innerHTML = '';
    
        this.activePhrase = null;
    //enable all keyboard letters and fix classes/colours for row 0
    for(let i=0; i<arrOfLetters0.length; i++){
        
        arrOfLetters0[i].classList.remove('wrong');
        arrOfLetters0[i].classList.remove('chosen');
        
        //enable button
        arrOfLetters0[i].disabled = false;
        
    }
   
    //enable all keyboard letters and fix classes/colours for row 1
        for(let i=0; i<arrOfLetters1.length; i++){
        
        arrOfLetters1[i].classList.remove('wrong');
        arrOfLetters1[i].classList.remove('chosen');
        
        //enable button
        arrOfLetters1[i].disabled = false;
        
    }
    
    //enable all keyboard letters and fix classes/colours for row 2
        for(let i=0; i<arrOfLetters2.length; i++){
        
        arrOfLetters2[i].classList.remove('wrong');
        arrOfLetters2[i].classList.remove('chosen');
        
        //enable butotn
        arrOfLetters2[i].disabled = false;
        
    }
    
    //Fix hearts
        document.querySelectorAll('.tries')[0].children[0].src = "images/liveHeart.png"; 
        document.querySelectorAll('.tries')[1].children[0].src = "images/liveHeart.png"; 
        document.querySelectorAll('.tries')[2].children[0].src = "images/liveHeart.png"; 
        document.querySelectorAll('.tries')[3].children[0].src = "images/liveHeart.png"; 
        document.querySelectorAll('.tries')[4].children[0].src = "images/liveHeart.png"; 



//create new game object.    
game = new Game();
game.startGame();
    
    
    
    
});  //END OF start game button click event
//------------- 



// not used atm
const keyrows = document.getElementsByClassName("keyrow");
//

//select all letters on all rows (0,1 and 2)
const buttonLetterQ = document.getElementsByClassName('keyrow')[0].children[0];
const buttonLetterW = document.getElementsByClassName('keyrow')[0].children[1];
const buttonletterE = document.getElementsByClassName('keyrow')[0].children[2];
const buttonletterR = document.getElementsByClassName('keyrow')[0].children[3];
const buttonletterT = document.getElementsByClassName('keyrow')[0].children[4];
const buttonletterY = document.getElementsByClassName('keyrow')[0].children[5];
const buttonletterU = document.getElementsByClassName('keyrow')[0].children[6];
const buttonletterI = document.getElementsByClassName('keyrow')[0].children[7];
const buttonletterO = document.getElementsByClassName('keyrow')[0].children[8];
const buttonletterP = document.getElementsByClassName('keyrow')[0].children[9];

const buttonletterA = document.getElementsByClassName('keyrow')[1].children[0];
const buttonletterS = document.getElementsByClassName('keyrow')[1].children[1];
const buttonletterD = document.getElementsByClassName('keyrow')[1].children[2];
const buttonletterF = document.getElementsByClassName('keyrow')[1].children[3];
const buttonletterG = document.getElementsByClassName('keyrow')[1].children[4];
const buttonletterH = document.getElementsByClassName('keyrow')[1].children[5];
const buttonletterJ = document.getElementsByClassName('keyrow')[1].children[6];
const buttonletterK = document.getElementsByClassName('keyrow')[1].children[7];
const buttonletterL = document.getElementsByClassName('keyrow')[1].children[8];

const buttonletterZ = document.getElementsByClassName('keyrow')[2].children[0];
const buttonletterX = document.getElementsByClassName('keyrow')[2].children[1];
const buttonletterC = document.getElementsByClassName('keyrow')[2].children[2];
const buttonletterV = document.getElementsByClassName('keyrow')[2].children[3];
const buttonletterB = document.getElementsByClassName('keyrow')[2].children[4];
const buttonletterN = document.getElementsByClassName('keyrow')[2].children[5];
const buttonletterM = document.getElementsByClassName('keyrow')[2].children[6];

//----------------------------------------------
//BUTTON LETTER PRESS EVENTS:
//row 0
buttonLetterQ.addEventListener('click', event => {

    game.handleInteraction(buttonLetterQ); //ok
    
    
});

buttonLetterW.addEventListener('click', event => {

    game.handleInteraction(buttonLetterW); //ok
    
    
});


buttonletterE.addEventListener('click', event => {

    game.handleInteraction(buttonletterE); //ok
    
    
});

buttonletterR.addEventListener('click', event => {

    game.handleInteraction(buttonletterR); //ok
    
    
});

buttonletterT.addEventListener('click', event => {

    game.handleInteraction(buttonletterT); //ok
    
    
});

buttonletterY.addEventListener('click', event => {

    game.handleInteraction(buttonletterY); //ok
    
    
});

buttonletterU.addEventListener('click', event => {

    game.handleInteraction(buttonletterU); //ok
    
    
});

buttonletterI.addEventListener('click', event => {

    game.handleInteraction(buttonletterI); //ok
    
    
});

buttonletterO.addEventListener('click', event => {

    game.handleInteraction(buttonletterO); //ok
    
    
});

buttonletterP.addEventListener('click', event => {

    game.handleInteraction(buttonletterP); //ok
    
    
});

//row 1
buttonletterA.addEventListener('click', event => {

    game.handleInteraction(buttonletterA); //ok
    
    
});

buttonletterS.addEventListener('click', event => {

    game.handleInteraction(buttonletterS); //ok
    
    
});

buttonletterD.addEventListener('click', event => {

    game.handleInteraction(buttonletterD); //ok
    
    
});

buttonletterF.addEventListener('click', event => {

    game.handleInteraction(buttonletterF); //ok
    
    
});

buttonletterG.addEventListener('click', event => {

    game.handleInteraction(buttonletterG); //ok
    
    
});

buttonletterH.addEventListener('click', event => {

    game.handleInteraction(buttonletterH); //ok
    
    
});

buttonletterJ.addEventListener('click', event => {

    game.handleInteraction(buttonletterJ); //ok
    
    
});

buttonletterK.addEventListener('click', event => {

    game.handleInteraction(buttonletterK); //ok
    
    
});

buttonletterL.addEventListener('click', event => {

    game.handleInteraction(buttonletterL); //ok
    
    
});

//row 2

buttonletterZ.addEventListener('click', event => {

    game.handleInteraction(buttonletterZ); //ok
    
    
});

buttonletterX.addEventListener('click', event => {

    game.handleInteraction(buttonletterX); //ok
    
    
});

buttonletterC.addEventListener('click', event => {

    game.handleInteraction(buttonletterC); //ok
    
    
});

buttonletterV.addEventListener('click', event => {

    game.handleInteraction(buttonletterV); //ok
    
    
});

buttonletterB.addEventListener('click', event => {

    game.handleInteraction(buttonletterB); //ok
    
    
});

buttonletterN.addEventListener('click', event => {

    game.handleInteraction(buttonletterN); //ok
    
    
});

buttonletterM.addEventListener('click', event => {

    game.handleInteraction(buttonletterM); //ok
    
    
});

//END OF BUTTON LETTER PRESS EVENTS
//-----------------------------------










