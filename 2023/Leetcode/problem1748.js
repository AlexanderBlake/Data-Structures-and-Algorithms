/**
 * @param {number[]} nums
 * @return {number}
 */

 // Time Complexity: O(n) = 2n Linear Time
 // Space Complexity: O(n) Linear Space
var sumOfUnique = function(nums) {
    let occurences = {};
    for (let i = 0; i < nums.length; i++) {
        if (occurences[nums[i]]) {
            occurences[nums[i]]++;
        } else {
            occurences[nums[i]] = 1;
        }
    }

    let sum = 0;
    for (let num in occurences) {
        if (occurences[num] == 1) {
            sum += parseInt(num);
        }
    }

    return sum;
};