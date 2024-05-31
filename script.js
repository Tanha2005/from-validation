const  submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()){
        alert("From Submitted Successfully");
    }
});

function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
nameError.innerHTML = "Name is required";
nameError.previousSibling.classList.add('fa-xmark');
return false;
    }
nameError.innerHTML ="";
nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
emailError.innerHTML = "Email is required";
emailError.previousSibling.classList.add('fa-xmark');
return false;
    }
emailError.innerHTML ="";
emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
passError.innerHTML = "Pasword is required";
passError.previousSibling.classList.add('fa-xmark');
return false;
    }
passError.innerHTML ="";
passError.previousElementSibling.classList.add('fa-check');
    return true;
}