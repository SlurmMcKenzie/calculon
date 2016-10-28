// HTML-Element: 						$("button")
// ID-Element:							$("#id")
// Class-Element:						$(".class")
// HTML-Elements with Class "intro":	$("p.intro")
// Elemente mit HREF-Attribut:			$("[href]")

// Waiting until the DOM is loaded...
document.addEventListener("DOMContentLoaded", function(event) {

    // random addition
    function zufall() {
    var a = Math.floor(Math.random() * 25);
    return a;
}

    // random multiplikation
    function malzufall() {
    var b = Math.floor(Math.random() * 10);
    return b;
}

    // addition
	function summe(summand1, summand2) {
    return summand1 + summand2;
}

    // subtraction
	function subtraction(minuend, subtrahend) {
    return minuend - subtrahend;
}

    // multiplication
	function produkt(faktor1, faktor2) {
    return faktor1 * faktor2;
}

    // division
	function quotient(dividend, divisor) {
    return dividend / divisor;
}


    document.getElementById("number1").innerHTML = summe(zufall(), zufall());
    document.getElementById("number2").innerHTML = summe(zufall(), zufall());
    var getElementOne = document.getElementById("number1").innerHTML;
    var getElementTwo = document.getElementById("number2").innerHTML;
    var addElements = +getElementOne + +getElementTwo;

    // listen to input (jquery)
    $('input')
    .on('input', function() {
        if ($(this).val() == addElements) {
            $('#solutionCheck1').html( "&#9745;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-green");
        } else {
            $('#solutionCheck').html( "&#9746;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() == addElements) {
            //$("#row1").removeClass("bg-1");
            //$("#row1").addClass("bg-green");
        } else {
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    });
});


// &#x2713;

// TODO-Liste:

// Fünf Aufgaben, möchtest Du noch weitermachen? Wieder fünf.
// An der Seite zurück
// Punkt vor Strich-Rechnung
// Formelsammlung
// Mal bis 10
// Lokalisierungen
// Tabellen mit Zahlen
