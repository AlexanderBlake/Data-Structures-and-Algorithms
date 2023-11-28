function range(nums) {
    return Math.max(...nums) - Math.min(...nums);
}

function median(nums) {
    nums.sort();

    if (nums.length % 2 == 1) {
        return nums[Math.floor(nums.length / 2)];
    }
    return (nums[Math.floor(nums.length / 2)] + nums[Math.floor(nums.length / 2) - 1]) / 2;
}

function main() {
    console.assert(range([3, 5, 6, 9, 5]) == 6, "Range Failed");
    console.assert(median([3, 5, 6, 9, 5]) == 5, "Median Failed");

    console.assert(median([3, 5, 6, 9, 5, 2, 0, 1]) == 4.0, "Median Failed 2");
    console.log("All tests run.");
}

main();