/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        const buyPrice = prices[i];
        const sellPrice = prices[i + 1];
        let potentialProfit = sellPrice - buyPrice;

        if (potentialProfit > 0) {
            totalProfit += potentialProfit;
        }
    }
    
    return totalProfit
};