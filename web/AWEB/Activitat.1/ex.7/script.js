let inter = prompt("Que edad tienes?");
if (inter != null) {
    parseInt(inter);
    if(inter>=18){
        document.getElementById("function").innerHTML =
        "Tienes " +inter+", puedes pasa a la fiesta."
    }
    if(inter<=18){
        document.getElementById("function").innerHTML =
        "Tienes" +inter+", no puedes entrar a la fiesta."
    }
  
}