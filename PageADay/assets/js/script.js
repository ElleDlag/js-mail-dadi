//chiamare una variabile all'interno di una funzione

var x
var n

var myFunction = function(){
    function subFunction () {
        x = "pippo"
    }
    miaFunzione()
}
miaFunzione()
console.log(x);

// callback