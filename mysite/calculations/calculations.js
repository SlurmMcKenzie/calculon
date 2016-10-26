// HTML-Element: 						$("button")
// ID-Element:							$("#id")
// Class-Element:						$(".class")
// HTML-Elements with Class "intro":	$("p.intro")
// Elemente mit HREF-Attribut:			$("[href]")

// Waiting until the DOM is loaded...
document.addEventListener("DOMContentLoaded", function(event) {

//$(document).ready(function() {

    // addition
	function summe(summand1, summand2) {
    return summand1 + summand2;
}

    // multiplication
	function produkt(faktor1, faktor2) {
    return faktor1 * faktor2;
}

    // random
    function zufall() {
	var a = Math.floor(Math.random() * 25);
	return a;
}


    // listen to input (jquery)

    $('input')
    .on('input', function() {
        $('#solutionCheck').html( $(this).val() );

    })
    .on('focus', function() {
        $('#solutionCheck').html( $(this).val() );
    })

	function malzufall() {
	var b = Math.floor(Math.random() * 10);
	return b;
}
    document.getElementById("number1").innerHTML = summe(zufall(), zufall());
	document.getElementById("number2").innerHTML = summe(zufall(), zufall());
});

// TODO-Liste:

// Fünf Aufgaben, möchtest Du noch weitermachen? Wieder fünf.
// An der Seite zurück
// Punkt vor Strich-Rechnung
// Formelsammlung
// Mal bis 10
// Lokalisierungen
// Tabellen mit Zahlen