var cube = document.querySelector('.cube');
/* var radioGroup = document.querySelector('.radio-group'); */
var currentClass = '';
var faceState=["front","right","back","left","top","bottom"]

function changeSide() {
  //var checkedRadio = radioGroup.querySelector(':checked');ù
  var i = Math.round(Math.random() * 5);
  console.log(i);
  var myFace = faceState[i];
  console.log(myFace);
  var showClass = 'show-' + myFace;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

cube.addEventListener( 'click', changeSide );