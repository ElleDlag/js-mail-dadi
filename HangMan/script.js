//global var
var dom=document;
var newGame = dom.querySelector('#new-game')
var wordBox = dom.querySelector('.mywordbox')
var letter = dom.querySelector('#letter')
var tryLetter = dom.querySelector('#letter-btn')
var tryWord = dom.querySelector('#word-btn')
var final = dom.querySelector('#final')
var allBody = dom.querySelector('.hangman-man')
var partBody = dom.querySelectorAll('.part-body')
var resultTxt = dom.querySelector('.result-txt')
/* var state = 1; */
var i = 0;
var n = 0;
var y = 0;
var tot = 0;

letter.disabled=true;
final.disabled=true;

//global var empty
var myWord;
var listLetter;
var myWordArray


// generic function fare refactoring con variabile
var showManState = (stateBody)=>{
  allBody.style.display=stateBody;
  partBody.forEach((e,n)=>{
    partBody[n].style.display=stateBody
  })
}
var showWord = (gameState,wordState,colorState)=>{
  letter.value ="";
  letter.disabled=true;
  final.disabled=true;
  letter.classList.remove('shake');
  myWordArray = myWord.split("");
  myWordArray.forEach( (e,i)=>{
    listLetter[i].textContent = e;
    listLetter[i].classList.add(gameState)
  })
  resultTxt.textContent = wordState;
  resultTxt.style.color = colorState;
}


//functions 
var randomWord = ()=>{
  showManState('none');
  n=0;
  y=0;
  tot=0;
  final.value="";
  resultTxt.textContent=""
  if(!wordBox.childElementCount == 0){
    wordBox.innerHTML = " ";
  }
  var aWords = myWords.split(',');
  var x = Math.round(Math.random() * aWords.length);
  myWord = aWords[x];
  letter.disabled=false;
  final.disabled=false;
  setBox();
  return myWord
};//randow new word
var setBox = ()=> {
  for (var i = 0; i < myWord.length; i++) {
    var letterBox = dom.createElement('div');
    letterBox.classList.add('letter-div')
    wordBox.appendChild(letterBox)
  }
  listLetter = dom.querySelectorAll('.letter-div');
  return listLetter
}//add box in html



var letterBtn = () => {
  letter.classList.remove('shake');

  if (wordBox.childElementCount == 0 || final.disabled ) {
    if (confirm("Do you want to take a new game!")) {
      randomWord();
    }//if in no
  }else{
    if (letter.value == "") {
      letter.classList.add('shake');
    } else if(!myWord.includes(letter.value.toLowerCase())){
      letter.classList.add('shake');
      allBody.style.display="block";
      partBody[n].style.display="block";
      n++;
      if(n >= partBody.length){
        showWord('wrong',"YOU LOSE!!!","red");
      }
      


    } else{
      myWordArray = myWord.split("");
      myWordArray.forEach( (e,i) => {
        if( e === letter.value.toLowerCase()){
          if(listLetter[i].textContent == ""){
            listLetter[i].textContent = e;
            y++
          }
    }
      });
      if(y >= listLetter.length){
        showWord('right',"YOU WIN!!!","green");
      }
      
    }
    
  }
  return myWordArray
}//check match with one letter input 
var wordBtn = ()=> {
  if (wordBox.childElementCount == 0 || final.disabled ) {
    if (confirm("Do you want to take a new game!")) {
      randomWord();
    }//if in no
  }
  myWordArray = myWord.split("");
  myFindArray = final.value.toLowerCase().split("");
  if(final.value.toLowerCase() != ""){
    if(confirm("Attention! You have only possibilities")){
      myWordArray.forEach( (e,i) => {      
        if(myFindArray[i] != e){
          tot++;   
        }        
      });
      if(tot ==  0){
        showWord('right',"YOU WIN!!!","green");
      } else{ 
        showManState('block');
        showWord('wrong',"YOU LOSE!!!","red");
      }
    }
  }

} //check match with one final input


//runtime
newGame.addEventListener('click',randomWord);
letter.addEventListener('click',function(){
  letter.classList.remove('shake');
  letter.value= "";
});
tryLetter.addEventListener('click',letterBtn);
tryWord.addEventListener('click', wordBtn);
