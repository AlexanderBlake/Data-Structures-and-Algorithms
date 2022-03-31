// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Linear Space (Sting of n-length)
function fizzBuzz(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result += 'fizzbuzz';
        } else if (i % 5 === 0) {
            result += 'buzz';
        } else if (i % 3 === 0) {
            result += 'fizz';
        } else {
            result += i;
        }

        if (i < n) {
            result += ', ';
        }
    }

    return result;
}

// Time Complexity: O(n) Linear Time
function fizzBuzzRec(n) {
    if (n < 1) {
        return '';
    } else if (n === 1) {
        return '1';
    }

    if (n % 15 === 0) {
        return fizzBuzzRec(n - 1) + ', fizzbuzz';
    } else if (n % 3 === 0) {
        return fizzBuzzRec(n - 1) + ', fizz';
    } else if (n % 5 === 0) {
        return fizzBuzzRec(n - 1) + ', buzz';
    }
    return fizzBuzzRec(n - 1) + ', ' + n;
}


function fizzBuzzTests() {
    console.assert(fizzBuzz(0) === '', 0);
    console.assert(fizzBuzz(1) === '1', 1);
    console.assert(fizzBuzz(2) === '1, 2', 2);
    console.assert(fizzBuzz(3) === '1, 2, fizz', 3);
    console.assert(fizzBuzz(5) === '1, 2, fizz, 4, buzz', 5);
    console.assert(fizzBuzz(15) === '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz', 15);

    console.assert(fizzBuzzRec(0) === '', 0);
    console.assert(fizzBuzzRec(1) === '1', 1);
    console.assert(fizzBuzzRec(2) === '1, 2', 2);
    console.assert(fizzBuzzRec(3) === '1, 2, fizz', 3);
    console.assert(fizzBuzzRec(5) === '1, 2, fizz, 4, buzz', 5);
    console.assert(fizzBuzzRec(15) === '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz', 15);
}


function main() {
    fizzBuzzTests();
    console.log(fizzBuzzRec(3));
}

main();
