// Time Complexity: O(n)
function isBalanced(equation) {
    let p = 0;

    for (let i = 0; i < equation.length; i++) {
        if (p < 0) {
            return false;
        }
        if (equation[i] === '(') {
            p++;
        } else if (equation[i] === ')') {
            p--;
        }
    }

    return p === 0;
}

function evaluate(num1, opeartor, num2) {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    console.log(num1);
    console.log(num2);
    console.log(opeartor);

    switch (opeartor) {
        case '+': {
            return num1 + num2;
        } case '-': {
            return num1 - num2;
        } case '*': {
            return num1 * num2;
        } case '/': {
            return num1 / num2;
        }
    }
}

function polishNotation(equation) {
    let myStack = [equation[0], equation[2]];
    let operators = ["+", "-", "*", "/"];

    for (let i = 4; i < equation.length; i += 2) {
        console.log(myStack[myStack.length - 1]);

        if (!(myStack[myStack.length - 1] in operators) && !(equation[i] in operators)) {
            myStack.push(evaluate(myStack.pop(), myStack.pop(), equation[i]));
            console.log("TEST");
        } else {
            myStack.push(equation[i]);
        }

        console.log(myStack);
    }

    return myStack[0];
}

function polishNotationTests() {
    console.assert(polishNotation("* - 5 6 7") === -7);
    console.assert(polishNotation("- 5 * 6 7") === -37);
}

function isBalancedTests() {
    console.assert(isBalanced("1 + 2"));
    console.assert(!isBalanced("(1 + 2"));
    console.assert(!isBalanced("1 + 2)"));
    console.assert(isBalanced("(1 + 2)"));

    console.assert(!isBalanced(")1 + 2("),
        "Close, then open");

    console.assert(isBalanced("(1 + (2 + 3) + 4)"));
    console.assert(!isBalanced("(1 + 2 + 3) + 4)"));
    console.assert(!isBalanced(")1 + (2 + 3) + 4)"));
}

function main() {
    isBalancedTests();
    polishNotationTests();
}

main();