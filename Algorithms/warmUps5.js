// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week.
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
function stocks(prices)
{
    if (prices.length < 1 || prices[prices.length - 1] <= 0)
    {
        return -1;
    }

    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++)
    {
        if (prices[i] <= 0)
        {
            return -1;
        }
        if (prices[i] < prices[i + 1])
        {
            profit += prices[i + 1] - prices[i]; 
        }
    }

    return profit;
}

function stocksTest()
{
    console.assert(stocks([]) == -1, "Empty list");
    console.assert(stocks([0, 0, 0, 0, 0]) == -1, "All zeros");
    console.assert(stocks([2, -1, 1, 2, 3]) == -1, "One negative value");
    console.assert(stocks([2, 3, 0, 4, 5]) == -1, "One zero value");
    console.assert(stocks([2, 3, 1, 4, 0]) == -1, "One zero value");

    console.assert(stocks([1, 1, 1, 1, 1]) == 0, "All the same value");
    console.assert(stocks([100, 80, 60, 40, 20]) == 0, "Decreasing");

    console.assert(stocks([100, 1, 100, 1, 100]) == 198, "Oscillating");
    console.assert(stocks([20, 40, 60, 80, 100]) == 80, "Increasing");
    console.assert(stocks([20, 32, 10, 8, 76]) == 80, "Random");
    console.assert(stocks([20, 32, 10, 8, 7]) == 12, "Random 2");
}

function main()
{
    stocksTest();
}

main();
