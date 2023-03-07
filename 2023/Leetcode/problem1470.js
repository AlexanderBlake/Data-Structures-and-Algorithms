/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(n) Linear Space
var shuffle = function(nums, n) {
    let shuffledArr = [];

    for (let i = 0; i < n; i++){
        shuffledArr.push(nums[i]);
        shuffledArr.push(nums[i + n]);
    }

    return shuffledArr
};