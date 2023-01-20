function findCorrectionNum(num) {
    // Check if input is 12 digits long
    if (num.toString().length !== 12) {
        return "Die Eingabe muss 12 Ziffern lang sein.";
    }
    // Check if input contains only numbers
    if (!/^\d+$/.test(num)) {
        return "Die Eingabe darf nur Zahlen enthalten.";
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

    return `${10 - result % 10} ist die Prüfziffer`;
}

console.log(findCorrectionNum('123456789012'));
