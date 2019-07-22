/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// Phrase class
class Phrase {
  constructor(phrase){
      this.phrase = phrase.toLowerCase();
  }

  //turn the string into box letters using the li
  addPhraseToDisplay(){
     let arr = [...this.phrase];

     console.log(arr);
     arr.forEach(function(entry){
       let $li;
       if(entry===' '){
         $li = $('<li>', {class:'space'});
       }else{
         $li = $('<li>', {class:'letter'});
       }
       $li.text(entry);
       $('#phrase ul').append($li);
     });
  }

  //A function to check if letter is part of the phrase or not.
  checkLetter(letterElementSelected){
     let isMatched = false;
     let letter = letterElementSelected.textContent;
     $('#phrase ul li.letter').each((index, value)=>{
        let $value = $(value);
        if(letter === $value.text()){
          isMatched=true;
        }
     });
     return isMatched;
   }

  //A function to show matched letter Uses flash for Animation
  showMatchedLetter(matchedLetterElement){
    let letter = $(matchedLetterElement).text();
    let elementFromPhrase = $(`#phrase ul li.letter:contains('${letter}')`);
    elementFromPhrase.addClass('animated show flash');
  }
}