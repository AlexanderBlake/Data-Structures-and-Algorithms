/**
 * @param {number} n
 * @return {boolean}
 */

/*
O(1) - Constant (Fastest)
O(log n) - Logarithmetic
O(n) - Linear 
O(n log n) - Fastest Comparison Sort
O(n^2) - Quadratic
*/

/*
Two pointers (Floyd's Algorithm)

n: Cycle Size
Time Complexity: O(n)
Space Complexity: O(1)
*/

/*
Hash Table (Lookup Table) (Hash Map)

n: Cycle Size
Time Complexity: O(n)
Space Complexity: O(n)
*/

var isHappy = function(n) {
    let mySet = new Set();
    let strNum;
    let mySum;

    while (n != 1) {
        strNum = n.toString();

        mySum = 0;
        for (let i = 0; i < strNum.length; i++) {
            mySum += parseInt(strNum[i]) * parseInt(strNum[i]);
        }

        if (mySet.has(mySum)) {
            return false;
        } else {
            mySet.add(mySum);
            n = mySum;
        }
    }

    return true;
};