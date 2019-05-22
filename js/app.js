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
const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

