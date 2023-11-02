// n = 15
// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Space Complexity: O(1) Constant Space (Total, Auxiliary)
// Time Complexity: O(n) Linear Time (Best, Average, Worst)
function fizzBuzz(n)
{
    let myString = "";

    for (let i = 1; i <= n; i++)
    {
        if (i % 3 === 0)
        {
            myString += "fizz";
        }
        if (i % 5 === 0)
        {
            myString += "buzz";
        }
        if (i % 3 && i % 5)
        {
            myString += i;
        }

        if (i < n)
        {
            myString += ", ";
        }   
    }

    return myString;
}

function main()
{
    console.log(fizzBuzz(15));
}

main();
