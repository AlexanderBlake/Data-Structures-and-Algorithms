function binarySearch(target, low, high, attempts = 0)
{
    let guess = Math.floor((high + low) / 2);
    // console.log(guess);
    attempts++;

    if (guess < target)
    {
        if (guess == low)
        {
            guess += 1;
        }

        return binarySearch(target, guess, high, attempts);
    }
    else if (guess > target)
    {
        if (guess == high)
        {
            guess += 1;
        }

        return binarySearch(target, low, guess, attempts);
    }
    else 
    {
        return attempts;
    }
}

function actualExpectedValue()
{
    let expectedValue = 0;

    for (let i = 1; i <= 100; i++)
    {
        expectedValue += 0.01 * payout(binarySearch(i, 1, 100));
    }

    return expectedValue;
}

function payout(guesses)
{
    return 13 - 3 * guesses;
}

function estimatedExpectedValue()
{
    let probability = 0.01;
    let payout = 10;
    let expectedValue = 0;

    for (let i = 0; i < 7; i++)
    {
        expectedValue += probability * payout;
        payout -= 3;
        probability *= 2;
    }

    return expectedValue;
}

function main()
{
    // console.log("Number of guesses/Depth of Binary Search Tree: " + binarySearch(12, 1, 100));
    console.log("Estimated expected value: $ " + estimatedExpectedValue());
    console.log("Actual expected value: $ " + actualExpectedValue());
}

main();
