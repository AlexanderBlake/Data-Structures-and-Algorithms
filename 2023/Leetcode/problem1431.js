/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
    let mostCandies = Math.max(...candies);

    // Time Complexity: O(n) = 2n Linear Time
    // Space Complexity: O(n) Linear Space
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= mostCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    // Time Complexity: O(n ^2) Quadratic Time
    // Space Complexity: O(n) Linear Space
    /*
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        for (let j = 0; j < candies.length; j++) {
            if (i != j && candies[i] + extraCandies < candies[j]) {
                result.push(false);
                break;
            }
        }

        if (result.length === i) {
            result.push(true);
        }
    }
    */

    return result;
};