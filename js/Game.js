/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Game class
class Game {
    constructor(missed=0, phrases, activePhrase=null){
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }

    //A function to start game. it first resets data from the previous game, generates a random phrase and then
    //prepares the game for play
    startGame(){
       //hide the start screen overlay
       $('#overlay h1').remove();
       $('#overlay').css('display','none');
       $('#overlay').removeClass('win lose');
       
       //reset data
       this.resetData();

       //generate a random phrase and set property of a Phrase object
       this.activePhrase = new Phrase(this.getRandomPhrase());
       //add new phrase
       this.activePhrase.addPhraseToDisplay();


    }

    //A function to generate and return a random phrase from the phrases array
    getRandomPhrase(){
       let arr = this.phrases; 
       let total = arr.length;
       let randomIndex = Math.floor(Math.random() * total);
       return this.phrases[randomIndex];
    }

    handleInteraction(buttonClicked){
    
       let letterFound = this.activePhrase.checkLetter(buttonClicked);
       if(letterFound === false){ 
         this.removeLife();
       }else{
           this.activePhrase.showMatchedLetter(buttonClicked);
       }
       this.checkForWin();

    }

    //A function to remove life icon.
    removeLife(){
       this.missed += 1;
       $(`#scoreboard ol li:nth-of-type(${this.missed})`).css('display','none');
       console.log(`missed:${this.missed}`);
    }

    //check to see if you won the game using the hearts icon.
    checkForWin(){
       let totalWithClassLetter = $('#phrase ul li.letter').length;
       let totalWithClassShow = $('#phrase ul li.show').length;
       if(totalWithClassLetter === totalWithClassShow){
           this.gameOver(true);
       }
       if(this.missed >=5){
           this.gameOver(false);
       }
    }

    // win or lose message and resets game data.
    gameOver(win){
       this.resetData();
       if(win){
           $('#overlay').css('display','flex');
           $('#overlay').addClass('win');
           $('#overlay h2').after($('<h1>Happy Hunting🕵️‍!!s</h1>'))
       }else{
           $('#overlay').css('display','flex');
           $('#overlay').addClass('lose');
           $('#overlay h2').after($('<h1>Sorry Hunt Again😖</h1>'))
       }

       /*
        
       */
       setTimeout(function(){
           $('#btn__reset').removeClass('animated bounce');
           $('#btn__reset').addClass('animated bounce');
       },4000);

       setTimeout(function(){
           $('#overlay h1').removeClass('animated rubberBand');
           $('#overlay h1').addClass('animated rubberBand');
       },1000);
    }

    //a function to reset game data.
    resetData(){
       this.missed = 0;
       $('#phrase ul').empty();
       $('#qwerty .keyrow button').removeClass('chosen animated pulse key');
       $('#qwerty .keyrow button').addClass('key');
       $('#qwerty .keyrow button').prop('disabled',false);
       $('#scoreboard ol li').css('display','');
    }
}