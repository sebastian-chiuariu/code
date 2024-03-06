let host = prompt("Adivina Clave secreta (Pista[x<100 && x>0]):");
let numero = 53;
host = parseInt(host);
if(host>0 && host<100){
    switch(host){
        case numero:
            document.getElementById("function").innerHTML = "Clave Aceptada"
            break;
        default:
            document.getElementById("function").innerHTML = "Clave Denegada"
            break;
    }
}
else{
    document.getElementById("function").innerHTML =
    "La clave no cumple los requisitos"
}