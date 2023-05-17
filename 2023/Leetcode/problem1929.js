/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // Time Complexity: 2n = O(n) Linear Time
 // Space Complexity: 2n = O(n) Linear Space
var getConcatenation = function(nums) {
    let len = nums.length;
    for (let j = 0; j < len; j++) {
        nums.push(nums[j]);
    }

    return nums;
    
    // return nums.concat(nums);
    
    /*
    let ans = nums;
    ans.push(...nums);
    return ans;
    */
};