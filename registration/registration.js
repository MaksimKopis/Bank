const email = document.getElementById("emailInp");
const name = document.getElementById("nameInp");
const surname = document.getElementById("surnameInp");
const password1 = document.getElementById("passwordInp1");
const password2 = document.getElementById("passwordInp2");
const registrationBtn = document.getElementById("registrationBtn");

registrationBtn.addEventListener("click", () => {
    if(email.value && name.value && password1.value && password2.value) {
        if(password1.value === password2.value) {
            
            const user = {
                email: email.value,
                name: name.value,
                surname: surname.value,
                password1: password1.value
            }

            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successful!");
            window.location.href = "../login/login.html";
        } else {
            alert("Passwords don't match!");
        }
    } else {
        alert("Завполніть всі поля!");
    }
})