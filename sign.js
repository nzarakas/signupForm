const validation = document.querySelector("#passwordValidation");
const password = document.querySelector("#password");


password.addEventListener("focus", () => {
    validation.style.display = "block";
});

password.addEventListener("blur", ()=>{
    validation.style.display = "none";
});

password.addEventListener("keyup", ()=>{
    const lowercaseLetters = /[a-z]/g;
    const uppercaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    // checks whether password contains a lowercase letter
    if(password.value.match(lowercaseLetters)){
        document.getElementById("lowercase").classList.remove("invalid");
        document.getElementById("lowercase").classList.add("valid");
    }
    else{
        document.getElementById("lowercase").classList.remove("valid");
        document.getElementById("lowercase").classList.add("invalid");
    }

    // checks whether password contains an uppercase letter
    if(password.value.match(uppercaseLetters)){
        document.getElementById("uppercase").classList.remove("invalid");
        document.getElementById("uppercase").classList.add("valid");
    }
    else{
        document.getElementById("uppercase").classList.remove("valid");
        document.getElementById("uppercase").classList.add("invalid");
    }

    // checks whether password contains a number
    if(password.value.match(numbers)){
        document.getElementById("digit").classList.remove("invalid");
        document.getElementById("digit").classList.add("valid");
    }
    else{
        document.getElementById("digit").classList.remove("valid");
        document.getElementById("digit").classList.add("invalid");
    }
    
});

