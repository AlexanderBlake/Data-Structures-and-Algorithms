// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function cpuBound(n) {
    let mySum = 0;
    for (let i = 0; i <= n; i++) {
        mySum += i;
    }
    console.log(mySum);
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function ioBound(n) {
    let mySum = 0;
    for (let i = 0; i <= n; i++) {
        mySum += i;
        console.log(mySum);
    }
}

/*
Write a function that compare floats to a 0.005 margin of error
Return true if the values are equivalent to the margin of error

num1: Number
num2: Number
Return: Boolean
*/
function floatEquality(num1, num2) {
    // 3.4 and 3.6 -> false
    // 4.00001 and 4.0002 -> true
    /*
    if (num1 > num2) {
        return num1 - num2 < 0.005;
    }
    return num2 - num1 < 0.005;
    */
    return Math.abs(num1 - num2) < 0.005;
}

/*
Write a function that converts cup to usd
No rounding necessary

pesos: Number
Return: Number
*/
function cup2usd(pesos) {
    return pesos / CONVERSION_RATE;
}

const CONVERSION_RATE = 270;

/*
Write a function that converts usd to cup
No rounding necessary

dollars: Number
Return: Number
*/
function usd2cup(dollars) {
    return dollars * CONVERSION_RATE;
    // return 1 / cup2usd(dollars);
}

/*
Write a function that converts integers to english words

spanishNum: Integer
Return: String

Time Complexity: O(1) Constant Time
*/
function integer2English(num) {
    let conversion = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                    'seven', 'eight', 'nine', 'ten'];

    // TODO
    return ''; // Placeholder to prevent errors, please delete
}

/*
Write a function that converts english numbers to spanish numbers

englishNum: String or Number
Return: String

Best Case Time Complexity: O(1) Constant Time
Worst Case Time Complexity: O(1) Constant Time
*/
function english2Spanish(englishNum) {
    let conversion = {'zero': 'cero', 'one': 'uno', 'two': 'dos',
                    'three': 'tres', 'four': 'cuatro', 'five': 'cinco',
                    'six': 'seis', 'seven': 'siete', 'eight': 'ocho',
                    'nine': 'nueve', 'ten': 'diez'};

    // TODO
    return ''; // Placeholder to prevent errors, please delete
}

function unitTests() {
    floatEqualityTests();
    cup2usdTests();
    usd2cupTests();
    integer2EnglishTests();
    english2SpanishTests();
}

function floatEqualityTests() {
    console.log("floatEqualityTests Started");

    let allTestsPassed = true;
    let expectedResults = [true, false, true, false, true, false, true];
    let testValues = [[0, 0], [0, 1], [0.04, 0.04], [0.02, 0.03], [0.016, 0.02],
                    [0.014, 0.02], [0.1 + 0.2, 0.3]];

    for (let i = 0; i < testValues.length; i++) {
        let actual = floatEquality(testValues[i][0], testValues[i][1]);
        if (actual !== expectedResults[i]) {
            allTestsPassed = false;
        }

        console.assert(actual === expectedResults[i], 'Expected: ' +
                    expectedResults[i] + ', Actual: ' + actual);
    }

    if (allTestsPassed) {
        console.log('All floatEqualityTests Passed');
    }
    console.log();
}

function cup2usdTests() {
    console.log("cup2usdTests Started");

    let allTestsPassed = true;
    let testValues = [0, 5, 10];
    let expectedResults = [0, 0.02, 0.04];

    for (let i = 0; i < testValues.length; i++) {
        let actual = cup2usd(testValues[i]);
        if (!floatEquality(actual, expectedResults[i])) {
            allTestsPassed = false;
        }

        console.assert(floatEquality(actual, expectedResults[i]), 'Expected: ' +
                                    expectedResults[i] + ', Actual: ' + actual);
    }

    if (allTestsPassed) {
        console.log('All cup2usdTests Passed');
    }
    console.log();
}

function usd2cupTests(){
    console.log("usd2cupTests Started");

    let allTestsPassed = true;
    let testValues = [0, 5, 10];
    let expectedResults = [0, 1350, 2700];

    for (let i = 0; i < testValues.length; i++) {
        let actual = usd2cup(testValues[i]);
        if (actual !== expectedResults[i]) {
            allTestsPassed = false;
        }

        console.assert(actual === expectedResults[i], 'Expected: ' +
                    expectedResults[i] + ', Actual: ' + actual);
    }

    if (allTestsPassed) {
        console.log('All usd2cupTests Passed');
    }
    console.log();
}

function integer2EnglishTests() {
    console.log("integer2EnglishTests Started");

    let allTestsPassed = true;
    let testValues = [0, 5, 10];
    let expectedResults = ['zero', 'five', 'ten'];

    for (let i = 0; i < testValues.length; i++) {
        let actual = integer2English(testValues[i]);
        if (actual !== expectedResults[i]) {
            allTestsPassed = false;
        }

        console.assert(actual === expectedResults[i], 'Expected: ' +
                    expectedResults[i] + ', Actual: ' + actual);
    }

    if (allTestsPassed) {
        console.log('All integer2EnglishTests Passed');
    }
    console.log();
}

function english2SpanishTests() {
    console.log("english2SpanishTests Started");

    let allTestsPassed = true;
    let testValues = ['zero', 'five', 'ten', 1, 4, 9];
    let expectedResults = ['cero', 'cinco', 'diez', 'uno', 'cuatro', 'nueve'];

    for (let i = 0; i < testValues.length; i++) {
        let actual = english2Spanish(testValues[i]);
        if (actual !== expectedResults[i]) {
            allTestsPassed = false;
        }

        console.assert(actual === expectedResults[i], 'Expected: ' +
                    expectedResults[i] + ', Actual: ' + actual);
    }

    if (allTestsPassed) {
        console.log('All english2SpanishTests Passed');
    }
    console.log();
}

function main() {
    // cpuBound(1_000_000_000);
    // ioBound(1_000_000);

    /*
    console.log((0.1 + 0.2) == 0.3);
    console.log(0.1 + 0.2);
    console.log(floatEquality(0.1 + 0.2, 0.3));
    */

    unitTests();
}

main();
