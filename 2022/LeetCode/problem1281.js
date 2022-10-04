/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var product = 1;
    var sum = 0;

    while (n > 0) {
        var digit = n % 10;

        product *= digit;
        sum += digit;

        n = Math.floor(n / 10);
    }

    return product - sum;
};