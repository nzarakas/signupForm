const validation = document.querySelector("#passwordValidation");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordMatch = document.getElementById("passwordMatch");

password.addEventListener("focus", () => {
    validation.style.display = "block";
});

//blur is out of focus
password.addEventListener("blur", ()=>{
    validation.style.display = "none";
});

//performs checks on the password a user is inputing on every key press
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
    
    //validates password only when the length is at least 8 characters
    if(password.value.length>=8){
        document.getElementById("passwordlength").classList.remove("invalid");
        document.getElementById("passwordlength").classList.add("valid");
    }
    else{
        document.getElementById("passwordlength").classList.remove("valid");
        document.getElementById("passwordlength").classList.add("invalid");
    }

   
});
//Confirm Password field needs to have the same input as password to be valid.
function validatePassword() {

    passwordMatch.style.display = 'block';
   
        if(password.value !==confirmPassword.value){
            confirmPassword.setCustomValidity("Passwords don't match");       
            passwordMatch.textContent = "Passwords don't match.";
            passwordMatch.classList.remove("valid");
            passwordMatch.classList.add("invalid");
    
        }
        else{
            confirmPassword.setCustomValidity('');   
            passwordMatch.textContent = "Passwords match!";
            passwordMatch.classList.remove("invalid");
            passwordMatch.classList.add("valid");
        }         
}

confirmPassword.addEventListener('input', validatePassword);
