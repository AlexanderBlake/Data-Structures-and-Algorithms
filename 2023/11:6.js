// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function findMax(nums) {
    let currentValue = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentValue) {
            currentValue = nums[i];
        }
    }

    return currentValue;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function findSum(nums) {
    let currentValue = 0;

    for (let i = 0; i < nums.size(); i++) {
        currentValue += nums[i];
    }

    return currentValue;
}

function main() {
    console.assert(findMax([-1, 1, 2, 3]) == 3, "Test 1 Failed");
    console.assert(findMax([-1, -1, -1, -1]) == -1, "Test 2 Failed");
    console.assert(findMax([-2.3, -3.14, -5]) == -2.3, "Test 3 Failed");
    console.assert(findMax([-1]) == -1, "Test 4 Failed");
    console.assert(findMax([1, 2, 3, -2]) == 3, "Test 5 Failed");

    console.assert(findSum([-1, 1, 2, 3]) == 5, "Sum Test 1 Failed");
    console.assert(findSum([-1, -1, -1, -1]) == -4, "Sum Test 2 Failed");
    console.assert(findSum([-2.3, -3.14, -5]) == -10.44, "Sum Test 3 Failed");
    console.assert(findSum([-1]) == -1, "Sum Test 4 Failed");
    console.assert(findSum([1, 2, 3, -2]) == 4, "Sum Test 5 Failed");

    console.log("All tests passed");
}

main();