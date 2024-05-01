function firstMissingPositive(nums: number[]): number {
    // Time Complexity: O(n^2) Quadratic
    // Space Complexity: O(1) Constant
    /*
    for (let i = 1; i <= nums.length; i++) {
        let exists = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] == i) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            return i;
        }
    }
    return nums.length + 1;
    */

    // Time Complexity: O(n log n)
    // Space Complexity: O(n) Linear
    /*
    nums.sort((a, b) => a - b);

    let val = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (nums[i] > val) {
                return val;
            } else if (nums[i] == val) {
                val++;
            }
        }
    }
    return val;
    */

    // Time Complexity: O(n) Linear
    // Space Complexity: O(n) Linear
    /*
    let mySet = new Set(nums);
    for (let i = 1; i <= nums.length + 1; i++) {
        if (!mySet.has(i)) {
            return i;
        }
    }
    */

    // Time Complexity: O(n) Linear
    // Space Complexity: O(1) Constant
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = nums.length + 1;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]);
        if (index <= nums.length) {
            nums[index - 1] = -1 * Math.abs(nums[index - 1]);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
};