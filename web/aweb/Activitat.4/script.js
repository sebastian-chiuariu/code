function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var timeString = hours + ":" + minutes; 
    timeString = timeString.padStart(4, '0');
    document.getElementById('time').innerText = timeString;
}
setInterval(updateTime, 1000);
updateTime();

var restricted = 0;
var amount = "";
var total = null;
var firstvalor, secondvalor, thirdvalor, fourthvalor;



function nine(){
    amount += "9";
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function eight(){
    amount += '8';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function seven(){
    amount += '7';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function six(){
    amount += '6';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function five(){
    amount += '5';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function four(){
    amount += '4';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function three(){
    amount += '3';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function two(){
    amount += '2';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function one(){
    amount += '1';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function zero(){
    amount += '0';
    document.getElementById('screen').innerHTML = amount;
    restricted = 0;
}

function sum(){
    amount += '+';
    document.getElementById('screen').innerHTML = amount;
    restricted=1
}

function rest(){
    amount += '-';
    document.getElementById('screen').innerHTML = amount;
    restricted = 1;
}

function divide(){
    amount += '/';
    document.getElementById('screen').innerHTML = amount;
    restricted = 1;
}

function multiply(){
    amount += 'x';
    document.getElementById('screen').innerHTML = amount;
    restricted = 1;
}

function equal(){
    amount += '=';
    document.getElementById('screen').innerHTML = amount;
    restricted = 1;
}




