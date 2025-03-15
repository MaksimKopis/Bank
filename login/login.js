const nameInput = document.getElementById("loginInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("LoginBtn");

loginBtn.addEventListener("click", () => {
    if(nameInput.value && passwordInput.value) {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if(user.name === nameInput.value && user.password1 === passwordInput.value) {
            alert("Login successful!");
            window.location.href = "../main/main.html";
        } else {
            alert("Wrong login or password!");
        }
    } else {
        alert("Завполніть всі поля!");
    }
});
