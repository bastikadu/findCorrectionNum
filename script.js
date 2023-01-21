// Initiallize constants
const input = document.getElementById('input');

// Submit form when ENTER is pressed
input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        run();
    }
})

function findCorrectionNum(num) {
    // Check if input is 12 digits long
    if (num.toString().length !== 12) {
        alert("Die Eingabe muss 12 Ziffern lang sein.");
        return;
    }
    // Check if input contains only numbers
    if (!/^\d+$/.test(num)) {
        alert("Die Eingabe darf nur Zahlen enthalten.");
        return;
    }

    // Initialize result and factor variables
    var result = 0;
    var factor = 1;
    // Convert input to string
    num = num.toString();

    // Iterate over each digit in the number
    for (var i = 0; i < num.length; i++) {
        // Multiply the current digit by the current factor and add to result
        result += num[i] * factor;
        // Alternate the factor between 1 and 3
        factor = factor === 1 ? 3 : 1;
    }

    alert(`${10 - result % 10} ist die Prüfziffer`)
    return
}

function run() {
    findCorrectionNum(input.value);
}
