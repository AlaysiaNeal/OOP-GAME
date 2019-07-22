/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// The Game class
const phrases = ['Should I Give Up',
'Keep Chasing Pavements',
'Even If It Leads Nowhere',
'If I Am wrong I Am Right',
'Finally Could This Be'
];

 // "Start Game"calling the startGame() method.with Animation for start button.
let game = null; 

$('#btn__reset').addClass('animated bounce');
$('#btn__reset').on('click',(event)=>{
    $('#btn__reset').removeClass('animated bounce');
    game = new Game(0,phrases,null);
    game.startGame();
  });

//handleInteraction() method on the Game object.

$('#qwerty').on('click',(event)=>{
    let button = event.target;
    console.log(button.tagName);
    if(button.tagName !== 'BUTTON'){
      return;
    }
    if(game===null){
        console.log("game object is null!")
        return;
    }
    game.handleInteraction(button);

  });

//a keypress for keyboard
$('body').on('keypress',(event)=>{
    let keyCode = event.keyCode;
    console.log(String.fromCharCode(keyCode));
    let letter = String.fromCharCode(keyCode).toLowerCase();
    let button = $(`button.key:contains('${letter}')`);
    console.log(button);
    game.handleInteraction(button.get(0));

});


$(document).mousedown((event)=>{
event.preventDefault();
});

