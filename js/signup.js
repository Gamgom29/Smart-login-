var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPass = document.getElementById('userPass');
var signBtn = document.getElementById('signBtn');
var users = [];
var erMsg = document.getElementById('error-msg');
if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
}
signBtn.addEventListener('click' , function(){
    if(nameValidation(userName.value) && emailValidation(userEmail.value) &&passValidation(userPass.value)){
        erMsg.classList.replace('text-danger' , 'text-success');
        erMsg.innerHTML = " success ";
        var user = {
            name : userName.value, 
            email : userEmail.value,
            password : userPass.value
        };
        var check = true;
        for(var i = 0 ; i < users.length ; ++i){
            if(user.email == users[i].email){
                check = false ; 
                break;
            }
        }
        if(check){
            users.push(user);
            localStorage.setItem('users' , JSON.stringify(users));
            erMsg.classList.remove('text-danger');
            erMsg.classList.add('text-success');
            erMsg.innerHTML = " success";
        }
        else {
            erMsg.classList.add('text-danger');
            erMsg.innerHTML = " email already exist ";
        }
    }
    else if(nameValidation(userName.value) == false || emailValidation(userEmail.value) == false){
        erMsg.classList.remove('text-success');
        erMsg.classList.add('text-danger');
        erMsg.innerHTML = " enter a valid name and email ";
    }
    else {
        erMsg.classList.remove('text-success');
        erMsg.classList.add('text-danger');
        erMsg.innerHTML = " password must be at least 4 characters , at least one letter and one number ";
    }
});
function nameValidation(name){
    var namergx = /^[a-z ,.'-]+$/;
    if(namergx.test(name))return true;
    else return false;
}
function emailValidation(em){
    var mailrgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(mailrgx.test(em))return true;
    else return false;
}
function passValidation(pass){
    passrgx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if(passrgx.test(pass))return true;
    else return false;
}