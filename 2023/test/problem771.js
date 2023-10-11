/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    /*
    // Time Complexity: O(m * n) Quadratic Time
    // Space Complexity: O(1) Constant Space
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;
                break;
            }
        }
    }
    */

    /*
    // Time Complexity: O(n log n)
    // Space Complexity: O(n) Linear Space
    let jewelsArr = Array.from(jewels).sort();
    let stonesArr = Array.from(stones).sort();

    let index = 0;
    for (let i = 0; i < stonesArr.length; i++) {
        while (stonesArr[i] > jewelsArr[index]) {
            index++;
        }

        if (stonesArr[i] === jewelsArr[index]) {
            count++;
        }
    }
    */

    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(n) Linear Space
    mySet = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (mySet.has(stones[i])) {
            count++;
        }
    }

    return count;
};