
function login() {
    const ism = document.getElementById("username");
    const pwd = document.getElementById("password");

    let name = ism.value;
    let prr = pwd.value;

    let rName = localStorage.getItem("ism");
    let rPrr = localStorage.getItem("pwd");

    console.log(name);
    console.log(rName, rPrr);

    if (name === rName && prr === rPrr) {
        window.location.href = "search.html";
    } else {
        alert("Login yoki parol xato");
    }
}

function register() {
    const user = document.getElementById("user")
    const ism = document.getElementById("Username");
    const pwd = document.getElementById("Password");
    let nameq = ism.value;
    let prrq = pwd.value;
    let userr = user.value
    localStorage.setItem("ism", nameq);
    localStorage.setItem("pwd", prrq);
    localStorage.setItem("user", userr)

    window.location.href = "index.html";
}
