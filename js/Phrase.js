/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* eslint-env es6 */
/* eslint-disable no-console */

/* eslint-env browser  */


class Phrase {
    constructor(phrase){
        
        this.phrase = phrase.toLowerCase();
        
    }
    
    /*
    *Display phrase on game board
    */
   addPhraseToDisplay() {
       

let elementPhrase = this.phrase;
              
       //console.log(elementPhrase) //test ok.
       
       //grabs ul
       const ul = document.querySelector('ul');

       for(let i=0; i < elementPhrase.length; i++){
           
           console.log(elementPhrase[i]); //test ok
           
        
           let list = document.createElement('li');
           if(elementPhrase[i] === ' ')
               {
                   
                list.className = "space";
                list.textContent = ' ';   
                   
                ul.appendChild(list);   
                   

                   
                   
               }
           //if we have a letter (not space)
           else{
               
               list.className = `hide letter ${elementPhrase[i]}`;
               list.textContent = elementPhrase[i];
               ul.appendChild(list); 

           }
       }
       
       
    }
    
    
}


