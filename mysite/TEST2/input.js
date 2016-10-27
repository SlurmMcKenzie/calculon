function ersetze() {
    var a = document.getElementById("number1").innerHTML;
    var b = document.getElementById("number2").innerHTML;
    var c = +a + +b;
    document.getElementById("result").innerHTML = c;
}
