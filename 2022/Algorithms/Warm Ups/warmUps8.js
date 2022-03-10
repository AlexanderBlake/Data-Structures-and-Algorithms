function nand(a, b)
{
    return !(a && b);
}

function nor(a, b)
{
    return !(a || b);
}

function xor(a, b)
{
    return a !== b;
}

function xnor(a, b)
{
    return a === b;
}

/*
The first is counting hills and valleys.
It was presented to me as a king is building a castle on his border.
He wants to put a castle at the top of every hill and at the bottom of every valley.
*/
/*
function castles(land)
{
    let p1;
    let p2;
    let start = 0;

    while (land[start] === land[start + 1])
    {
        start++;
    }

    let increasing = (land[start] < land[start + 1]) ? false : true;
    let count = (start === 0) ? -1 : 0;

    for (let i = start; i < land.length - 1; i++)
    {
        p1 = land[i];
        p2 = land[i + 1];

        //compare p1 to p2 and see if its greater or less
        if ((increasing && p2 < p1) || (!increasing && p2 > p1))
        {
            increasing = !increasing;
            count++;
        }
    }
    return count + 1;
}
*/

function castles(land)
{
    let p1;
    let p2;
    let start = 0;

    while (land[start] === land[start + 1])
    {
        start++;
    }

    let increasing = (land[start] < land[start + 1]) ? false : true;
    let count = 0;

    for (let i = start; i < land.length - 1; i++)
    {
        p1 = land[i];
        p2 = land[i + 1];

        //compare p1 to p2 and see if its greater or less
        if ((increasing && p2 < p1) || (!increasing && p2 > p1))
        {
            increasing = !increasing;
            count++;
        }
    }
    return count + 1;
}

function consolidate(country)
{

    let population = {"USA": 1000, "UK": 500, "EU": 1000};

    return population[country];
}


function main()
{
    console.log(castles([5, 6, 4, 6, 7, 8, 7, 6, 7, 5, 4]));
    console.log(castles([5, 6, 4, 6, 6, 8, 7, 6, 7, 5, 4]));
    console.log(castles([5, 5, 4]));
    console.log(castles([5, 5, 6]));
    console.log(castles([5, 5, 5, 5, 5, 5, 5]));
    // console.log(consolidate("UK"));

}

main();


