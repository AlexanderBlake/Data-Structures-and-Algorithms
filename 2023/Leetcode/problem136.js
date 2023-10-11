/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Time Complexity: O(n^2)
    /*
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++; 
            }
        }
        if (count == 1) {
            return nums[i];
        }
    }
    */

    // Time Complexity: O(n log n)
    /*
    nums.sort();
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            if (nums[i + 1] == nums[i + 2]) {
                return nums[i];
            } else {
                return nums[i + 1];
            }
        }
    }

    return nums[nums.length - 1];
    */

    // Time Complexity: O(n)
    // Space Complexity: O(n)
    /*
    myObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (myObj[nums[i]] !== undefined) {
            delete myObj[nums[i]];
        } else {
            myObj[nums[i]] = i;
        }
    }

    for (let key in myObj) {
        return key;
    }
    */

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;
};