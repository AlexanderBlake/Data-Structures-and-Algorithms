function solution(S)
{
    let count = 0;

    /*
    let i = 0;
    do
    {
        if (S[i] === 'X')
        {
            count++;
            i += 2;
        }
    } while (i++ < S.length);
    */

    for (let i = 0; i < S.length; i++)
    {
        if (S[i] === 'X')
        {
            count++;
            i += 2;
        }
    }

    return count;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function fibonacciIter(n)
{
    let result;
    let second = 0;
    let first = 1;

    if (n < 2)
    {
        return n;
    }
    
    for (let i = 2; i <= n; i++)
    {
        result = first + second;
        second = first;
        first = result;
    }

    /*
    let i = 2;
    while (i <= n)
    {
        result = first + second;
        second = first;
        first = result;

        i++;
    }
    */

    return result
}

function fibonacciRec(n)
{
    if (n < 2)
    {
        return n;
    }
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

function fibonacciTests()
{
    let result;

    result = fibonacciIter(0);
    console.assert(result === 0, "Actual: " + result + " Expected: 0");
    result = fibonacciIter(1);
    console.assert(result === 1, "Actual: " + result + " Expected: 1");
    result = fibonacciIter(2);
    console.assert(result === 1, "Actual: " + result + " Expected: 1");
    result = fibonacciIter(3);
    console.assert(result === 2, "Actual: " + result + " Expected: 2");
    result = fibonacciIter(4);
    console.assert(result === 3, "Actual: " + result + " Expected: 3");
    result = fibonacciIter(5);
    console.assert(result === 5, "Actual: " + result + " Expected: 5");
    result = fibonacciIter(6);
    console.assert(result === 8, "Actual: " + result + " Expected: 8");
    result = fibonacciIter(7);
    console.assert(result === 13, "Actual: " + result + " Expected: 13");

    result = fibonacciRec(0);
    console.assert(result === 0, "Actual: " + result + " Expected: 0");
    result = fibonacciRec(1);
    console.assert(result === 1, "Actual: " + result + " Expected: 1");
    result = fibonacciRec(2);
    console.assert(result === 1, "Actual: " + result + " Expected: 1");
    result = fibonacciRec(3);
    console.assert(result === 2, "Actual: " + result + " Expected: 2");
    result = fibonacciRec(4);
    console.assert(result === 3, "Actual: " + result + " Expected: 3");
    result = fibonacciRec(5);
    console.assert(result === 5, "Actual: " + result + " Expected: 5");
    result = fibonacciRec(6);
    console.assert(result === 8, "Actual: " + result + " Expected: 8");
    result = fibonacciRec(7);
    console.assert(result === 13, "Actual: " + result + " Expected: 13");
}

function solutionTests()
{
    console.assert(solution(".X.X") === 1);
    console.assert(solution(".X..X") === 2);
    console.assert(solution("X.XXXXX.X.") === 3);
    console.assert(solution("XX.XXX..") === 2);
    console.assert(solution("XXXX") === 2);
}

function main()
{
    solutionTests();
    fibonacciTests();
}

main();
