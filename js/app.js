/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser  */

//const phrase = new Phrase();
//const game = new Game();

//console.log(game);

//const phrase = new Phrase('Life is like a box of chocolates');

//console.log(`Phrase - phrase: ${phrase.phrase}`);
//ok

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

/*
Step 8
Now that you’ve built the basics, head over to the app.js file. This is where you’ll create an
event listener for the "Start Game" button that the user sees when they load your Phrase
Hunter game.
*/
let game = '';
const button = document.getElementById('btn__reset');

button.addEventListener('click', event => {
game = new Game();
game.startGame();
    
});
//------------- ok!

//Step 10
/*

*/


