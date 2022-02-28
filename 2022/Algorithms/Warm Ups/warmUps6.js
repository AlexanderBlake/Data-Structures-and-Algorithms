function challenge1(x, y, z)
{
    /*
    if (x)
    {
        y = false;
    }
    else
    {
        y = true;
    }
    */

    y = !x;
}

function challenge2(x, y, z)
{
    /*
    if (x)
    {
        return y;
    }
    else
    {
        return false;
    }
    */

    return x && y;
}

function challenge3(x, y, z)
{
    /*
    if (x)
    {
        y = z;
    }
    else
    {
        y = !z;
    }
    */

    y = x === z;
}


// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Space Complexity: O(1) Constant Excluding the string
function fizzBuzz(n)
{
    let myString = "";

    for (let i = 1; i <= n; i++)
    {
        if (i % 15 === 0)
        {
            myString += "fizzbuzz";
        }
        else if (i % 3 === 0)
        {
            myString += "fizz"
        }
        else if (i % 5 === 0)
        {
            myString += "buzz"
        }
        /*
        if (i % 3 === 0)
        {
            if (i % 5 !== 0)
            {
                myString += "fizz";
            }
            else
            {
                myString += "fizzbuzz";
            }
        }
        else if (i % 5 === 0)
        {
            myString += "buzz";
        }
        else
        {
            myString += i;
        }
        */

        if (i < n)
        {
            myString += ", ";
        }
    }

    return myString;
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// fibonacciRec(8) -> 13
function fibonnaciRec(n)
{
    if (n === 0)
    {
        return 0;
    }
    if (n < 3)
    {
        return 1;
    }

    return fibonnaciRec(n - 1) + fibonnaciRec(n - 2);
}


function main()
{
    console.log(fibonnaciRec(20));
}

main();
