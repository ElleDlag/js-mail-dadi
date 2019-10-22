var dom = document;
var listMail = dom.querySelectorAll('.item-mail h6');
var checkMail = dom.querySelector('#email');
var checkBtn = dom.querySelector('.check-btn');
var addBtn = dom.querySelector('.add-btn');
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
                alert('la mail è presente')
            }else{
                if(confirm('Vuoi aggiungere la tua mail?')){
                    alert('ok'); 
                }
                break;
            }
        }
    }

})
