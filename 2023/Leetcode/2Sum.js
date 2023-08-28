/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // n = nums.length
var twoSum = function(nums, target) {
    // Brute-Force
    // Time Complexity: O(n^2) Quadratic Time
    // Space Complexity: O(1) Constant Space
    /*
    for (let i = 0; i < nums.length - 1; i++) { // n - 1
        for (let j = i + 1; j < nums.length; j++) { // n - i - 1
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    */

    // Sort First
    // Time Complexity: O(n log n) = n + n log n + n + n = 3n + n log n
    // Space Complexity: O(n) Linear Space
    let sorted = [...nums];
    sorted.sort(function (a,b) {
        return a - b; // Ascending
    }); // O(n log n)

    let left = 0;
    let right = sorted.length - 1;
    while (sorted[left] + sorted[right] != target) {
        if (sorted[left] + sorted[right] < target) {
            left++;
        } else {
            right--;
        }
    }

    let val1 = sorted[left];
    let val2 = sorted[right];

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val1 || nums[i] == val2) {
            result.push(i);

            if (result.length == 2) {
                break;
            }
        }
    }

    return result;
};