/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }

    let low = 0;
    let high = x;
    let median = Math.floor(x / 2);

    while (low != median) {
        if (median * median <= x) {
            low = median;
        } else {
            high = median;
        }
        median = Math.floor((low + high) / 2);
    }

    return median;
};