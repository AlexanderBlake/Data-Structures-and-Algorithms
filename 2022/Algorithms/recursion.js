/*
function main(n = 1)
{
    console.log(n);
    main(++n);
}
*/

/*
function myFunc(x)
{
    if (x)
    {
        return false;
    }
    else
    {
        return true;
    }
}
*/

function test(n)
{   
    console.log(n);
    if (n > 0)
    {
        
        /*
        test(n);
        n--;
        */
        
        // n--;
        // test(n);

        test(--n);

        /*
        test(n--);

        test(n);
        n--;
        */
    }
}

function main()
{
    test(3);
}

main();
