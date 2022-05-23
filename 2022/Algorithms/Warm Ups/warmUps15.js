function elevation(current, next) {
    if (current < next) {
        return 1;
    } else if (current > next) {
        return -1;
    }
    return 0;
}

// The first is counting hills and valleys
// It was presented to me as a king is building a castle on his border
// He wants to put a castle at the top of every hill and at the bottom of every valley.
function castles(landscape) {
    let elev;
    let count = 0;
    let currElev = elevation(landscape[0], landscape[1]);

    for (let i = 1; i < landscape.length - 1; i++) {
        elev = elevation(landscape[i], landscape[i + 1]);

        if (elev !== currElev) {
            count++;
            currElev = elev;
        }
    }

    return count;
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week.
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
function stocks(prices) {
    let profit = 0;

    if (prices.length !== 5) {
        return -1;
    }

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] <= 0) { 
            return -1;
        }

        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return (prices[prices.length - 1] === 0) ? -1 : profit;
}

function stocksTests() {
    console.assert(stocks([]) === -1, "Empty list");
    console.assert(stocks([1, 2, 3, 4]) === -1, "List of length 4");
    console.assert(stocks([0, 0, 0, 0, 0]) === -1, "All zeros");
    console.assert(stocks([2, -1, 1, 2, 3]) === -1, "One negative value");
    console.assert(stocks([2, 3, 0, 4, 5]) === -1, "One zero value");
    console.assert(stocks([2, 3, 1, 4, 0]) === -1, "One zero value");
    
    console.assert(stocks([1, 1, 1, 1, 1]) === 0, "All the same value");
    console.assert(stocks([100, 80, 60, 40, 20]) === 0, "Decreasing");

    console.assert(stocks([100, 1, 100, 1, 100]) === 198, "Oscillating");
    console.assert(stocks([20, 40, 60, 80, 100]) === 80, "Increasing");
    console.assert(stocks([20, 32, 10, 8, 76]) === 80, "Random");
    console.assert(stocks([20, 32, 10, 8, 7]) === 12, "Random 2");
}

function castlesTests() {
    console.assert(castles([0, 5, 10, 8, 2, 10, 12, 20, 15, 3, 4, 5, 3]) === 5, 'Test 1');
    console.assert(castles([0, 0, 0, 0, 0, 0]) === 0, 'Flat');
    console.assert(castles([0, 0, 0, 1]) === 1, 'Flat then increase');
    console.assert(castles([1, 1, 1, 0]) === 1, 'Flat then decrease');
    console.assert(castles([0, 5, 0, 5]) === 2, 'Oscillation');
}

function main() {
    castlesTests();
    stocksTests();
}

main();