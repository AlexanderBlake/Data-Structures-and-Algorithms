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
}

main();
