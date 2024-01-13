var username =localStorage.getItem('username') ;
if(username)
{
    document.getElementById('main-title').innerHTML = `Welcome ${username}`
}

var users = [];
if(localStorage.getItem('users')){
    users =JSON.parse(localStorage.getItem('users'));
}
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
var signMail = document.getElementById('signEmail');
var signPass = document.getElementById('signPass');
var signinBtn = document.getElementById('signinBtn');
var signmsg = document.getElementById('signMsg');

function signin(){
    if(emailValidation(signMail.value) && passValidation(signPass.value)){
        var check = false ; 
        for(var  i = 0 ; i < users.length ; ++i){
            if(users[i].email == signMail.value && users[i].password == signPass.value){
                check = true ; 
                localStorage.setItem('username',users[i].name);
                break;
            }
        }
        if(check){
            signmsg.classList.add('d-none');
            window.open('userpage.html','_self')
        }
        else {
            signmsg.classList.remove('d-none');
            signmsg.innerHTML = "user not found"
        }
    }
    else {
        signmsg.classList.remove('d-none');
        signmsg.innerHTML = "incorrect email or password"
    }
};

function logout(){
    localStorage.removeItem('username');
};
