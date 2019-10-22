var dom = document;
var listMail = dom.querySelectorAll('.item-mail h6');
var checkMail = dom.querySelector('#email');
var checkBtn = dom.querySelector('.check-btn');
var addBtn = dom.querySelector('.add-btn');
var result = dom.querySelector('.result');
var mailListGroup = dom.querySelector('.mail-list-group');
var mailValue;
var mailLenght;

checkBtn.addEventListener('click', function(){
    mailValue = checkMail.value;
    mailLength = mailValue.length;
    alert(mailValue)
    if(!mailValue.includes('@') && !mailValue.includes('.') || mailLength <= 4){
        alert('Questa non sembra essere una mail')
    }else{
        for (var i = 0; i < listMail.length; i++) {
            console.log(listMail[i].textContent)
            if(mailValue === listMail[i].textContent){
                result.textContent = "Mail " + mailValue +" già presente nel database"
                break;
            }else{
                if(confirm('Vuoi aggiungere la tua mail?')){
                   mailListGroup.innerHTML += "<li class='list-group-item d-flex justify-content-between lh-condensed'>\
                   <div class='item-mail'>\
                   <h6 class='my-0'>" + mailValue + "</h6></div></li>";
                }
                break;
            }
        }
    }

})
