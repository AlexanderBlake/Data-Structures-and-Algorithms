/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (!myHash.has(nums[i])) {
            myHash.set(complement, i);
        } else {
            return [myHash.get(nums[i]), i];
        }
    }
};