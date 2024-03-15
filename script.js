var login = document.getElementById("sign");

function signin() {
    var email = document.getElementById("inputEmail").value;
    var pwd = document.getElementById("inputPassword").value;
    if (email === "user@gmail.com" && pwd === "12345") {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

login.addEventListener("click", signin);

var register= document.getElementById("register");

function registration()
{
    window.location.href="Register.html";
}

register.addEventListener("click",registration);

