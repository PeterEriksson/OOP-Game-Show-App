/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */





class Phrase {
    constructor(phrase){
        
        this.phrase = phrase.toLowerCase();
        
        
    }
    
    
   addPhraseToDisplay() {
       
//       const div = document.createElement('div id="phrase" class="section"');
              //const div = document.createElement('div');

       const body = document.querySelector('body');
       body.append(div);
       
       let ul = document.createElement('ul');

       
       const length =  newG.phrases.length;

       
       newG.phrases.length;
       
//       for(let i = 0; i < length i++){
//            let li = document.createElement('li');
//            
//           ul.appendChild(li);
//           
//           
//       }
       
    }
}

const body = document.querySelector('body');
const div = document.createElement('div');
body.append(div);
div.setAttribute("id","phrase")
div.setAttribute("class","section")

