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
    console.log(n);

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
        console.log(i);
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

// 4 & 6 -> 12
// 4: 4, 8, 12
// 6: 6, 12
function lcm(num1, num2)
{
    return (num1 * num2) / gcf(num1, num2);
}

// 4 & 6 -> 2
// 4: 1, 2, 4
// 6: 1, 2, 3, 6
// 40 & 48 -> 8
// 40: 1, 2, 4, 5, 8, 10, 20, 40
// 48: 1, 2, 3, 4, 6, 8, 12, 24, 48

// 4 & 8 -> 4
function gcf(num1, num2)
{
    let greatestFactor = 1;
    for (let i = 2; i <= num1; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
        {
            greatestFactor = i;
        }
    }

    return greatestFactor;
}

// y = 1 + 2 + 3 + ...
// If the sum mentioned above, y, adds up to a perfect square (ex. 16, 25) then the perfect square is a magic square
// The first magic square is 1
function magicSquare(num)
{
    let count = 0;
    let sum = 1;

    for (let i = 2; count < num; i++)
    {
        if (Math.floor(Math.sqrt(sum)) == Math.sqrt(sum))
        {
            console.log(sum);
            count++;
        }

        sum += i;
    }    
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

    /*
    console.log(fibonacciRec(1));
    console.log(fibonacciRec(2));
    console.log(fibonacciRec(3));
    console.log(fibonacciRec(7));
    */

    // console.log(fibonacciIter(1000));
    // console.log(fibonacciRec(1000));

    magicSquare(4);
    console.log(lcm(4, 6));
    console.log(gcf(4, 6));
    console.log(gcf(40, 48));
    console.log(gcf(4, 8));
}

main();
