function factorial(n) {
    if (n == 0) {
        return 1;
    }

    for (let i = n - 1; i > 1; i--) {
        n *= i;
    }
    return n;
}

// Time Complexity: O(1.5n) ~ O(n)
function countPairs(numbers, k) {
    let nums = new Map();

    // All Cases: O(n)
    for (let i = 0; i < numbers.length; i++) {
        if (nums.has(numbers[i])) {
            nums.set(numbers[i], true);
        } else {
            nums.set(numbers[i], false);
        }
    }

    // console.log(nums);

    // Average Case: O(n) ~ O(n / 2)
    // Best Case: O(1)
    // Worst Case: O(n)
    let pairs = 0;
    for (const key of nums.keys()) {
        if (k == 0 && nums.get(key)) {
            pairs += 1;
        } else if (k != 0 && nums.has(key + k)) {
            pairs += 1;
        }       
    }
    
    // pairs += factorial(nums.size) / (factorial(2) * factorial(nums.size - 2));
    return pairs;
}

function main() {
    console.assert(countPairs([1, 1, 1, 2], 1) == 1);
    console.assert(countPairs([1, 1, 1, 2], 0) == 1);

    // (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
    // a + k = b
    // 1 + 3 = 4 (1, 4)
    // 1 + 2 = 3 (1, 3)
    // 2 + 2 = 4 (2, 4)
    // 1 + 1 = 2 (1, 2)
    // 2 + 1 = 3 (2, 3)
    // 3 + 1 = 4 (3, 4)
    // 1 + 0 = 1 (1, 1)
    // 2 + (-1) = 1 (2, 1)
    // 3 + (-1) = 2 (3, 2)
    // 4 + (-1) = 3 (4, 3)
    console.assert(countPairs([1, 2, 3, 4], 4) == 0);
    console.assert(countPairs([1, 2, 3, 4], 3) == 1);
    console.assert(countPairs([1, 2, 3, 4], 2) == 2);
    console.assert(countPairs([1, 2, 3, 4], 1) == 3);
    console.assert(countPairs([1, 2, 3, 4], 0) == 0);
    console.assert(countPairs([1, 2, 3, 4], -1) == 3);
}

main();
