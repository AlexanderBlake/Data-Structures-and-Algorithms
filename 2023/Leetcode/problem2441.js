/**
 * @param {number[]} nums
 * @return {number}
 */
 // Time Complexity: O(n) = 2n Linear Time
 // Space Complexity: O(n) Linear Space
var findMaxK = function(nums) {
    let maxK = -1;
    let hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashTable[-1 * nums[i]] !== undefined) {
            hashTable[-1 * nums[i]] = true;
        } else if (hashTable[nums[i]] === undefined) {
            hashTable[nums[i]] = false;
        }
    }

    for (let key in hashTable) {
        let absoluteValue = Math.abs(key);
        if (hashTable[key] === true && maxK < absoluteValue) {
            maxK = absoluteValue;
        }
    }

    return maxK;
};