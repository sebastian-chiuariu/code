let usernamehost = prompt("Cual es tu nombre de usuario");
if (!usernamehost.trim()) {
  usernamehost = null;
}
let predefined = "usuario";
let user = usernamehost ?? predefined;
document.getElementById("function").innerHTML = user;

