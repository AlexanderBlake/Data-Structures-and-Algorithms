/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let myNum;
    let result;
    let low = 1;
    let high = n;

    do {
        myNum = Math.floor((low + high) / 2);
        result = guess(myNum);

        if (result == -1) {
            high = myNum;
        } else if (result == 1) {
            if (low != myNum) {
                low = myNum;
            } else {
                myNum++;
                result = 0;
            }
        }
    } while (result != 0);

    return myNum;

    /*
    let result;
    do {
        result = guess(n);
        if (result == -1) {
            n--;
        }
    } while (result != 0);

    return n;
    */
};