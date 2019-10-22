var nome = prompt('Il tuo nome');
var cubeOne = document.querySelector('.cube_1');
var cubeTwo = document.querySelector('.cube_2');
var playGame = document.querySelector('.play-btn');
var pcResult = document.querySelector('.pc-result');
var gamerResult = document.querySelector('.gamer-result');
var winner = document.querySelector('.winner');
/* var radioGroup = document.querySelector('.radio-group'); */
var currentClassOne = '';
var currentClassTwo = '';
var faceState=["front","right","back","left","top","bottom"];
var faceValue=[1,3,6,5,2,4];
var sumFace;
var i, n, pc;


function changeSide() {
  

  //var checkedRadio = radioGroup.querySelector(':checked');
  i = Math.round(Math.random() * 5);
  n = Math.round(Math.random() * 5);
  pc = Math.round(Math.random() * (12 - 2)+2);
  pcResult.innerHTML = pc

 
  var myFaceOne = faceState[i];
  var myFaceTwo = faceState[n];
  var showClassOne = 'show-' + myFaceOne;
  var showClassTwo = 'show-' + myFaceTwo;
  sumFace = faceValue[i]+ faceValue[n];
  if ( currentClassOne || currentClassTwo) {
    cubeOne.classList.remove( currentClassOne );
    cubeTwo.classList.remove( currentClassTwo );
  }

  cubeOne.classList.add( showClassOne );
  cubeTwo.classList.add( showClassTwo );

  currentClassOne = showClassOne;
  currentClassTwo = showClassTwo;
  gamerResult.innerHTML = sumFace;
  winner.innerHTML = pc == sumFace ? "È un pareggio": pc >  sumFace ? "The winner is: COMPUTER" : "The winner is: " + nome.toUpperCase();

 }
// set initial side
//changeSide();

nome = nome == "" || nome === null ? "Giocatore1": nome;
document.querySelector('.name-gamer').textContent = nome;
playGame.addEventListener( 'click', changeSide );