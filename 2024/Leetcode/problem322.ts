function coinChange(coins: number[], amount: number): number {
    // n: Number of coins
    // m: amount
    // Time Complexity: O(n * m)
    // Space Complexity: O(m)
    let arr = [];

    for (let i = 0; i <= amount; i++) {
        if (i % coins[0] == 0) {
            arr[i] = i / coins[0];
        } else {
            arr[i] = Infinity;
        }
    }

    for (let i = 1; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j >= coins[i]) {
                arr[j] = Math.min(arr[j], arr[j - coins[i]] + 1);
            }
        }
    }

    if (arr[amount] == Infinity) {
        return -1;
    }
    return arr[amount];

    /*
    // n: Number of coins
    // m: amount
    // Time Complexity: O(n * m)
    // Space Complexity: O(n * m)
    let arr = [];

    for (let i = 0; i < coins.length; i++) {
        arr.push([]);
        for (let j = 0; j <= amount; j++) {
            arr[i].push(Infinity);
        }
    }

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (i == 0) {
                if (j % coins[i] == 0) {
                    arr[i][j] = j / coins[i];
                }
            } else if (j >= coins[i]) {
                arr[i][j] = Math.min(arr[i][j - coins[i]] + 1, arr[i - 1][j]);
            } else {
                console.log("Test", arr[i - 1][j], i);
                arr[i][j] = arr[i - 1][j];
            }
        }
    }

    if (arr[coins.length - 1][amount] == Infinity) {
        return -1;
    }
    return arr[coins.length - 1][amount];
    */
};