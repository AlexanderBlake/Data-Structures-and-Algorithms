function firstMissingPositive(nums: number[]): number {
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