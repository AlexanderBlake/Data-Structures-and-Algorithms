/**
 * @param {number[]} nums
 * @return {number}
 */

 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(n) Linear Space
var numIdenticalPairs = function(nums) {
    let numInstances = {};

    for (let i = 0; i < nums.length; i++) {
        if (numInstances[nums[i]] !== undefined) {
            numInstances[nums[i]]++;
        } else {
            numInstances[nums[i]] = 0;
        }
    }

    let count = 0;
    for (let num in numInstances) {
        while (numInstances[num] !== 0) {
            count += numInstances[num]--;
        }
    }

    /*
    // Time Complexity: O(n ^ 2) Quadratic Time
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    */

    return count;
};