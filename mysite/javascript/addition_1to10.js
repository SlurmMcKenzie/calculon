// Add two numbers while the result is in the range of 20.

// Waiting until the DOM is loaded...
document.addEventListener("DOMContentLoaded", function(event) {

function zufall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

    // addition
	function summe(summand1, summand2) {
    return summand1 + summand2;
}

    // Row 1
    var element1 = zufall(0,20);
    var differenceOne = 20 - element1;
    var element2 = zufall(0,differenceOne);

    document.getElementById("number1").innerHTML = element1;
    document.getElementById("number2").innerHTML = element2;
    var getElementOne = document.getElementById("number1").innerHTML;
    var getElementTwo = document.getElementById("number2").innerHTML;
    var addElements1 = +getElementOne + +getElementTwo;

    // listen to input (jquery)
    $('input.oneInput')
    .on('input', function() {
        if ($(this).val() == addElements1) {
            $('#solutionCheck1').html( "&#9745;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-green");
        } else {
            $('#solutionCheck1').html( "&#9746;" );
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements1) {
            $("#row1").removeClass("bg-1");
            $("#row1").addClass("bg-red");
        }
    });

    // Row 2
    var element3 = zufall(0,20);
    var differenceTwo = 20 - element3;
    var element4 = zufall(0,differenceTwo);

    document.getElementById("number3").innerHTML = element3;
    document.getElementById("number4").innerHTML = element4;
    var getElementThree = document.getElementById("number3").innerHTML;
    var getElementFour = document.getElementById("number4").innerHTML;
    var addElements2 = +getElementThree + +getElementFour;

    // listen to input (jquery)
    $('input.twoInput')
    .on('input', function() {
        if ($(this).val() == addElements2) {
            $('#solutionCheck2').html( "&#9745;" );
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-green");
        } else {
            $('#solutionCheck2').html( "&#9746;" );
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements2) {
            $("#row2").removeClass("bg-1");
            $("#row2").addClass("bg-red");
        }
    });

    // Row 3
    var element5 = zufall(0,20);
    var differenceThree = 20 - element5;
    var element6 = zufall(0,differenceThree);

    document.getElementById("number5").innerHTML = element5;
    document.getElementById("number6").innerHTML = element6;
    var getElementFive = document.getElementById("number5").innerHTML;
    var getElementSix = document.getElementById("number6").innerHTML;
    var addElements3 = +getElementFive + +getElementSix;

    // listen to input (jquery)
    $('input.threeInput')
    .on('input', function() {
        if ($(this).val() == addElements3) {
            $('#solutionCheck3').html( "&#9745;" );
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-green");
        } else {
            $('#solutionCheck3').html( "&#9746;" );
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements3) {
            $("#row3").removeClass("bg-1");
            $("#row3").addClass("bg-red");
        }
    });

    // Row 4
    var element7 = zufall(0,20);
    var differenceFour = 20 - element7;
    var element8 = zufall(0,differenceFour);

    document.getElementById("number7").innerHTML = element7;
    document.getElementById("number8").innerHTML = element8;
    var getElementSeven = document.getElementById("number7").innerHTML;
    var getElementEight = document.getElementById("number8").innerHTML;
    var addElements4 = +getElementSeven + +getElementEight;

    // listen to input (jquery)
    $('input.fourInput')
    .on('input', function() {
        if ($(this).val() == addElements4) {
            $('#solutionCheck4').html( "&#9745;" );
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-green");
        } else {
            $('#solutionCheck4').html( "&#9746;" );
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements3) {
            $("#row4").removeClass("bg-1");
            $("#row4").addClass("bg-red");
        }
    });

    // Row 5
    var element9 = zufall(0,20);
    var differenceFive = 20 - element9;
    var element10 = zufall(0,differenceFive);

    document.getElementById("number9").innerHTML = element9;
    document.getElementById("number10").innerHTML = element10;
    var getElementNine = document.getElementById("number9").innerHTML;
    var getElementTen = document.getElementById("number10").innerHTML;
    var addElements5 = +getElementNine + +getElementTen;

    // listen to input (jquery)
    $('input.fiveInput')
    .on('input', function() {
        if ($(this).val() == addElements5) {
            $('#solutionCheck5').html( "&#9745;" );
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-green");
        } else {
            $('#solutionCheck5').html( "&#9746;" );
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-red");
        }
    })
    .on('focus', function() {
        if ($(this).val() != addElements5) {
            $("#row5").removeClass("bg-1");
            $("#row5").addClass("bg-red");
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
