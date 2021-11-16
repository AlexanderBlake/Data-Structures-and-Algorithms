function nameMatch(knownAliases, name)
{
    let aliasNames;
    let targetNames = name.split(" ");

    for (let i = 0; i < knownAliases.length; i++)
    {
        aliasNames = knownAliases[i].split(" ");

        // Exact match
        if (name === knownAliases[i])
        {
            return true;
        }
    
        // Compare last names   
        if (targetNames[targetNames.length - 1] === aliasNames[aliasNames.length - 1])
        {
            // Compare first names
            if (targetNames[0] === aliasNames[0])
            {
                if (aliasNames.length !== 3 || targetNames.length !== 3)
                {
                    return true;
                }

                else if (aliasNames[1][0] === targetNames[1][0] && (aliasNames[1].length === 1 || targetNames[1].length === 1))
                {
                    return true;
                }
            }

            else if (targetNames[1][0] === aliasNames[0][0])
            {
                return true;
            }

            else if (targetNames[0] + targetNames[1] === aliasNames[1] + aliasNames[2])
            {
                return true;
            }
        }

    }
    return false;
}


function nameMatchTests()
{
    let knownAliases = ["Alphonse Gabriel Capone", "Al Capone"];
    console.assert(nameMatch(knownAliases, "Alphonse Gabriel Capone"), "Test 1, Alphonse Gabriel Capone");
    console.assert(nameMatch(knownAliases, "Al Capone"), "Test 1, Al Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse Francis Capone"), "Test 1, Alphonse Francis Capone");
    
    knownAliases = ["Alphonse Capone"];
    console.assert(nameMatch(knownAliases, "Alphonse Gabriel Capone"), "Test 2, Alphonse Gabriel Capone");
    console.assert(nameMatch(knownAliases, "Alphonse Francis Capone"), "Test 2, Alphonse Francis Capone");
    console.assert(!nameMatch(knownAliases, "Alexander Capone"), "Test 2, Alexander Capone");

    knownAliases = ["Alphonse Gabriel Capone"];
    console.assert(nameMatch(knownAliases, "Alphonse Capone"), "Test 3, Alphonse Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse Francis Capone"), "Test 3, Alphonse Francis Capone");
    console.assert(!nameMatch(knownAliases, "Alexander Capone"), "Test 3, Alexander Capone");

    knownAliases = ["Alphonse Gabriel Capone", "Alphonse Francis Capone"];
    console.assert(nameMatch(knownAliases, "Alphonse Gabriel Capone"), "Test 4, Alphonse Gabriel Capone");
    console.assert(nameMatch(knownAliases, "Alphonse Francis Capone"), "Test 4, Alphonse Francis Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse Edward Capone"), "Test 4, Alphonse Edward Capone");

    knownAliases = ["Alphonse Gabriel Capone", "Alphonse F Capone"];
    console.assert(nameMatch(knownAliases, "Alphonse G Capone"), "Test 5, Alphonse G Capone");
    console.assert(nameMatch(knownAliases, "Alphonse Francis Capone"), "Test 5, Alphonse Francis Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse E Capone"), "Test 5, Alphonse E Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse Edward Capone"), "Test 5, Alphonse Edward Capone");
    console.assert(!nameMatch(knownAliases, "Alphonse Gregory Capone"), "Test 5, Alphonse Gregory Capone");

    knownAliases = ["Alphonse Gabriel Capone"];
    console.assert(nameMatch(knownAliases, "Gabriel Alphonse Capone"), "Test 6, Gabriel Alphonse Capone");
    console.assert(nameMatch(knownAliases, "Gabriel A Capone"), "Test 6, Gabriel A Capone");
    console.assert(nameMatch(knownAliases, "Gabriel Capone"), "Test 6, Gabriel Capone");
    console.assert(!nameMatch(knownAliases, "Gabriel Francis Capone"), "Test 6, Gabriel Francis Capone");

    knownAliases = ["Alphonse Gabriel Capone"]
    console.assert(!nameMatch(knownAliases, "Alphonse Capone Gabriel"), "Test 7, Alphonse Capone Gabriel");
    console.assert(!nameMatch(knownAliases, "Capone Alphonse Gabriel"), "Test 7, Capone Alphonse Gabriel");
    console.assert(!nameMatch(knownAliases, "Capone Gabriel"), "Test 7, Capone Gabriel");
}

function infiniteLoops()
{
    /*
    for (let i = 0; i < 1; i--)
    {
        console.log(i);
    }
    */

    /*
    let i = 0;
    while (i === 0)
    {
        console.log(i);
    }
    */
    
    let i = 0;
    do
    {
        console.log(i);
    } while (i === 0);

}


// Return the number of attempts/guesses
function binarySearchIter(low, high, target)
{
    let attempts = 1;
    let guess = Math.floor((low + high) / 2);

    while (guess !== target)
    {
        if (guess < target)
        {
            low = guess;
        }
        else if (guess > target)
        {
            high = guess;
        }

        // console.log(guess);
        guess = Math.floor((low + high) / 2);
        attempts++;
    }

    // console.log(guess);
    return attempts;
}


// Return the number of attempts / guesses
function binarySearchRec(low, high, target, attempts = 1)
{
    let guess = Math.floor((low + high) / 2);

    if (guess < target) 
    {
        return binarySearchRec(guess, high, target, ++attempts);
    }
    else if (guess > target)
    {
        return binarySearchRec(low, guess, target, ++attempts);
    }
    return attempts;
}

function main()
{
    nameMatchTests();
    // infiniteLoops();
    console.log(binarySearchIter(0, 100, 37));
    console.log(binarySearchRec(0, 100, 37));
}

main();
