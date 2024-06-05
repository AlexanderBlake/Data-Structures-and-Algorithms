function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[slow];
    let slow2 = 0;

    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    while (slow2 != slow) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};