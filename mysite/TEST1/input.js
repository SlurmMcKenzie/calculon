function evaluateSolution() {
    var proposedSolution = document.getElementById("userInput").value;
    if (proposedSolution == 666 ) {
        document.getElementById("demo").innerHTML = "You are right: " + proposedSolution;
    } else {
        document.getElementById("demo").innerHTML = "You are wrong: " + proposedSolution;
    }
}
