// Tabelle dynamisch erzeugen
// braucht Arrays mit den Aufgaben:
// Zahl1 [0] Additionszeichen [1] Zahl2 [2] Gleichheitszeichen [3] Ergebnis
// for elemente in Array; do
//    Schreibe eine Zeile, füge element 1 ein
//    ergänze eine generische ID
//

function ersetze() {
    var a = document.getElementById("number1").innerHTML;
    var b = document.getElementById("number2").innerHTML;
    var c = +a + +b;
    document.getElementById("result").innerHTML = c;
}
