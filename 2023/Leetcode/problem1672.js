/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    // Time Complexity: O(m * n)
    // Space Complexity: O(1)
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }

        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    
    return maxWealth;
};