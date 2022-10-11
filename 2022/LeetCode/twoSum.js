/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myObj = {};

    // O(n) Linear Time, O(n) Linear Space
    for (let i = 0; i < nums.length; i++) {
        if (myObj[nums[i]] !== undefined) {
            return [i, myObj[nums[i]]];
        } else {
            myObj[target - nums[i]] = i;
        }
    }


    /*
    // O(n^2) Quadratic Time, O(1) Constant Space
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i , j];
            }
        }
    }
    */
};