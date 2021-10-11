// 1, 1, 2, 3, 5, 8, 13
// n = 7 return 13
// Time Complexity: O(2^n)
// Space Complexity: O(n)
function fibonacciRec(n)
{
    if (n <= 2)
    {
        return 1;
    }

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function fibonacciIter(n)
{
    let temp;
    let prev = 1;
    let current = 1;

    for (let i = 2; i < n; i++)
    {
        temp = prev + current;
        prev = current;
        current = temp;
    }

    return current;
}

// 5! = 5 * 4 * 3 * 2 = 120
// 0! = 1
// Time Complexity: O(n)
// Space Complexity: O(n)
function factorialRec(n)
{
    if (n < 2)
    {
        return 1;
    }
    return n * factorialRec(n - 1);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function factorialIter(n)
{
    let factorial = 1;

    while (n > 1) 
    {
        factorial *= n--;
    }
    return factorial;
}

function lcm(num1, num2)
{

}

function magicSquare(num)
{

}

function main()
{
    /*
    console.log(factorialIter(0));
    console.log(factorialIter(1));
    console.log(factorialIter(2));
    console.log(factorialIter(5));

    console.log(fibonacciIter(1));
    console.log(fibonacciIter(2));
    console.log(fibonacciIter(3));
    console.log(fibonacciIter(7));

    console.log(factorialRec(0));
    console.log(factorialRec(1));
    console.log(factorialRec(2));
    console.log(factorialRec(5));
    */

    console.log(fibonacciRec(1));
    console.log(fibonacciRec(2));
    console.log(fibonacciRec(3));
    console.log(fibonacciRec(7));
}

main();
