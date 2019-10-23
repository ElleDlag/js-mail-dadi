var dom = document;
var listMail;
var checkMail = dom.querySelector('#email');
var checkBtn = dom.querySelector('.check-btn');
var addBtn = dom.querySelector('.add-btn');
var output = dom.querySelector('.result');
var mailListGroup = dom.querySelector('.mail-list-group');
var mailValue;
var mailLenght;
var controller;
/* var n; */

//with "for" cycle without break
checkBtn.addEventListener('click', function(){

    listMail = dom.querySelectorAll('.item-mail h6');
    mailValue = checkMail.value;
    mailLength = mailValue.length;
    n = mailLength;

    //il controller non è perfetto servirebbe una funzione che matcha con una regular expression - da provare in BONUS
    if(!mailValue.includes('@') && !mailValue.includes('.') || mailLength <= 4){
        alert('Questa non sembra essere una mail')
    } else{
        for (var i = 0; i < listMail.length; i++) {
            console.log(listMail[i].textContent)
            if(mailValue === listMail[i].textContent ){
                controller = true;
                i = listMail.length+1;
            } else {controller = false}       
        }
        if(controller == true){
            alert("sei nella lista")
        } else{ alert("non esiste")}
    }
});


//with break version BAD IDEA :(
/* checkBtn.addEventListener('click', function(){
    listMail = dom.querySelectorAll('.item-mail h6');
    mailValue = checkMail.value;
    mailLength = mailValue.length;
    n = mailLength;
    if(!mailValue.includes('@') && !mailValue.includes('.') || mailLength <= 4){
        alert('Questa non sembra essere una mail')
    }else{
        for (var i = 0; i < listMail.length; i++) {
            if(mailValue === listMail[i].textContent){
                output.textContent = "Mail " + mailValue +" già presente nel database"
                break;
            } else{
                if( i == ((listMail.length)-1)){
                    if(confirm('Mail non presente. Vuoi aggiungere la tua mail?')){
                        mailListGroup.innerHTML += "<li class='list-group-item d-flex justify-content-between lh-condensed'>\
                        <div class='item-mail'>\
                        <h6 class='my-0'>" + mailValue + "</h6></div></li>";
                     }
                     break;
                }
            }
            checkMail.value = ""
        }
    }
}) */

