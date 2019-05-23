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
    
    checkLetter(letter) {
      
       let found = false;
        
        for(let i=0; i < this.phrase.length; i++){
            
            if(this.phrase[i] === letter){
                found = true;
            }

        }
        return found;
    } //ok!
    
    
    showMatchedLetter(letter) {
        //<li class="hide letter h">
        //game.activePhrase.showMatchedLetter('a')
        
        if(this.checkLetter){
            //we (might) collect a bunch of results. Create array
            let listMatched = []
            listMatched = document.getElementsByClassName('hide letter '+letter);
                //loop through the array and for every list element -> show.
                for(let i=0; i < listMatched.length; i++){
                    listMatched[i].classList.toggle('show'); 
                }
        } //OK!!
        

                
            } //end of showMatchedLetter
            

    
} //end of class Phrase
        
    
    

    



