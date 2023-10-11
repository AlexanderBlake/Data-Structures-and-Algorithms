/**
 * @param {number} n
 * @return {string[]}
 */

 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(n) Linear Space
var fizzBuzz = function(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let num = "";

        if (i % 3 === 0) num += "Fizz";
        if (i % 5 === 0) num += "Buzz";
        if (i % 5 !== 0 && i % 3 !== 0) num += i.toString();

        /*
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i.toString());
        */

        result.push(num);
    }

    return result;
};