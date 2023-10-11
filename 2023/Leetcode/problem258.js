/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = num;
    while (num >= 10) {
        result = 0;
        while (num != 0) {
            result += num % 10;
            num = Math.floor(num / 10);
        }
        num = result;
    }
    return result;
};