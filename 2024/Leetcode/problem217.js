/**
 * @param {number[]} nums
 * @return {boolean}
 */

 // Space Complexity: O(n) Linear including stack
 function recursive(nums, i) {
    if (nums[i] == nums[i + 1]) {
        return true;
    }
    if (i < nums.length - 1) {
        return recursive(nums, i + 1);
    } else {
        return false;
    }
}

var containsDuplicate = function(nums) {
    /*
    Solution 1: Brute-Force
    Time Complexity: O(n^2) Quadratic
    Space Complexity: O(1) Constant
    */
    /*
    for (let i = 0; i < nums.length; i++) {
        let target = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (target === nums[j]) {
                return true;
            }
        }
    }
    return false;
    */

    /*
    Solution 2: Sort
    Time Complexity: O(n log n)
    Space Complexity: O(1) Constant
    */
    nums.sort();

    // return recursive(nums, 0);
    /*
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
    */

    /*
    let i = 0; 
    for (let j = 1; j < nums.length; j++){
        if (nums[i] !== nums[j]){
            i++; 
            nums[i] = nums[j];
        }
    }
    return nums.splice()
    */
    /*
    Solution 3 (Optimal):
    Time Complexity: O(n) Linear
    Space Complexity: 
    */
    return nums.length !== new Set(nums).size;
};