const name = document.querySelector("#name")
function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function displayDatee() {
  document.getElementById("demoo").innerHTML = Date();
}
var x = document.getElementById("myBtnn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert("Bosma Kuyasan!");
}

function someOtherFunction() {
  alert("Bir bor ekan bir yo'q ekan tugadi!");
}
var x = document.getElementById("myBtne");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", moveBy);

function myFunction() {
  document.getElementById("demoe").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demoe").innerHTML += "Clicked!<br>";
}
let AuthName = localStorage.getItem("user")
name.textContent = `Salom ${AuthName}`;
console.log(AuthName)