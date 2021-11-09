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

// [17, 23, 14, 6, 8]
// Time Complexity: O(n^2)
function selectionSort(arr)
{
    let temp;
    let smallestIndex;

    for (let i = 0; i < arr.length - 1; i++) 
    {
        smallestIndex = i;

        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[smallestIndex] > arr[j])
            {
                smallestIndex = j;
            }
        }

        if (smallestIndex !== i)
        {
            temp = arr[smallestIndex];
            arr[smallestIndex] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

function bubbleSort(arr)
{
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                arr[j] += arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] -= arr[j + 1];
            }
        }
    }
    return arr;
}

function insertionSort(arr) 
{

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

function selectionSortTests()
{
    console.assert(JSON.stringify(selectionSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Selection sort Sorted Array");
    console.assert(JSON.stringify(selectionSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Selection sort Unsorted Array");
}

function bubbleSortTests()
{
    console.assert(JSON.stringify(bubbleSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Bubble sort Sorted Array");
    console.assert(JSON.stringify(bubbleSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Bubble sort Unsorted Array");
}

function insertionSortTests()
{
    console.assert(JSON.stringify(insertionSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Insertion sort Sorted Array");
    console.assert(JSON.stringify(insertionSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Insertion sort Unsorted Array");
}

function main()
{
    stocksTest();
    selectionSortTests();
    bubbleSortTests();
    insertionSortTests();
}

main();
