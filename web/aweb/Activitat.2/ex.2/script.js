let edat = prompt("Que edad tienes?");
if (edat != null) {
    parseInt(edat);
    if(edat>=18){
        document.getElementById("function").innerHTML =
        "Ok"
    }
    if(edat<=18){
        document.getElementById("function").innerHTML =
        "No, eres menor, quieres un petisuit?"
    }
}