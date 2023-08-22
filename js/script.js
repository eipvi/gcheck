const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})

function checkInputUsername(){
    const usernameValue = username.value;

   if(usernameValue === ""){
    errorInput(username, "Required name!");
   }else{
    const formItem = username.parentElement;
    formItem.className = "gc-form-content";
   }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Required email!");
    }else{
        const formItem = email.parentElement;
        formItem.className = "gc-form-content";
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Required password!")
    }else if(passwordValue.length < 8){
        errorInput(password, "The password must be at least 8 characters long.")
    }else{
        const formItem = password.parentElement;
        formItem.className = "gc-form-content";
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    
    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "Password confirmation is mandatory!")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "The password do not match!")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "gc-form-content";
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "gc-form-content error";
}

function checkForm(){

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".gc-form-content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "gc-form-content"
    });

    if(isValid){
        alert("cadastro com sucesso!")
        location.href = "login.html";
    }
}


