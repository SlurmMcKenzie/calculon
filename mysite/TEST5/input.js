// Tabelle dynamisch erzeugen
// braucht Arrays mit den Aufgaben:
// Zahl1 [0] Additionszeichen [1] Zahl2 [2] Gleichheitszeichen [3] Ergebnis
// for elemente in Array; do
//    Schreibe eine Zeile, füge element 1 ein
//    ergänze eine generische ID
//
"use strict";

document.addEventListener("DOMContentLoaded", function(event) {

function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function radioactive() {
var numero1 = rnd(0,20);
var numero2 = rnd(0,20);
if (numero1 >= numero2) {;
    document.getElementById("number1").innerHTML = numero1;
    document.getElementById("number2").innerHTML = numero2;
} else {
    document.getElementById("number2").innerHTML = numero1;
    document.getElementById("number1").innerHTML = numero2;
}
}
radioactive();

});
