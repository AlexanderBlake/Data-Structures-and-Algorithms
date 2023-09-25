/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        } 

        if (prices[i] - buyPrice > profit) {
            profit = prices[i] - buyPrice;
        }
    }

    return profit;
};