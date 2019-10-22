var dom = document;
var listMail = dom.querySelectorAll('.item-mail');
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
            
        }
    }

})
