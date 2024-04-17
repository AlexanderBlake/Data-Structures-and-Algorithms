/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const getFizzBuzz = (num) => {
        let phrases = {3: 'Fizz', 5: 'Buzz'};

        let result = '';
        for (let dividend in phrases) {
            if (num % dividend === 0) {
                result += phrases[dividend];
            }
        }

        if (result === '') {
            result = num.toString();
        }
    
        return result;
    }

    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(getFizzBuzz(i));
    }

    return arr;
};