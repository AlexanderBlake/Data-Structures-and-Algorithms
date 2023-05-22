/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let lowerCount = 0;
    let targetCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            lowerCount++;
        } else if (nums[i] == target) {
            targetCount++;
        }
    }

    result = []
    for (let i = 0; i < targetCount; i++) {
        result.push(lowerCount + i);
    }

    return result;
};