// NAND = NOT + AND
function nand(a, b) {
    return !(a && b);
}

// NOR = NOT + OR
function nor(a, b) {
    return !(a || b);
}

// XOR = Exclusive + OR
function xor(a, b) {
    return a !== b;
}

// XNOR = NOT + XOR
function xnor(a, b) {
    return a === b;
}

function challenge1(x, y, z)
{
    /*
    if (x)
    {
        y = false;
    }
    else
    {
        y = true;
    }
    */
    y = !x;
}

function challenge2(x, y, z)
{
    /*
    if (x)
    {
        return y;
    }
    else
    {
        return false;
    }
    */
    return x && y;
}

function challenge3(x, y, z)
{
    /*
    if (x)
    {
        y = z;
    }
    else
    {
        y = !z;
    }
    */
    y = x === z;
}


// Time Complexity: O(n) Linear Time
function secondHighest(arr) {
    if (arr.length < 2) {
        return -1;
    }

    let greatest;
    let secondGreatest;

    if (arr[0] > arr[1]) {
        greatest = arr[0];
        secondGreatest = arr[1];
    } else {
        greatest = arr[1];
        secondGreatest = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (greatest < arr[i]) {
            secondGreatest = greatest;
            greatest = arr[i];
        } else if (secondGreatest < arr[i]) {
            secondGreatest = arr[i];
        }
    }

    return secondGreatest;
}

function secondHighestTests() {
    console.assert(secondHighest([]) === -1, "Empty array");
    console.assert(secondHighest([1]) === -1, "1 element array");
    console.assert(secondHighest([1, 2]) === 1, "2 element array sorted");
    console.assert(secondHighest([2, 1]) === 1, "2 element array sorted in reverse");
    console.assert(secondHighest([1, 2, 3]) === 2, "3 element array");
    console.assert(secondHighest([1, 2, 3, 4, 5]) === 4, "4 element array sorted");
    console.assert(secondHighest([5, 4, 3, 2, 1]) === 4, "4 element array sorted in reverse");
    console.assert(secondHighest([2, 4, 1, 5, 3]) === 4, "4 element array not sorted");
    console.assert(secondHighest([4, 1, 5, 2, 3]) === 4, "4 element array value at front");
    console.assert(secondHighest([2, 1, 5, 3, 4]) === 4, "4 element array value at end");
    console.assert(secondHighest([24, 3.14, 48, 2.71, 96, -100, 12, 6, 3]) === 48, "Random values");
}

function main() {
    secondHighestTests();
}

main();