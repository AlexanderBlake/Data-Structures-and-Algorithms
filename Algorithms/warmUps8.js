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

function nor(x, y)
{
    return !(x || y);
}

function nand(x, y)
{
    return !(x && y);
}

function xor(x, y)
{
    return x !== y;
}

function grade(student, score)
{
    if (score >= 90)
    {
        return "A";
    }

    if (student === 3)
    {
        return "A";
    }

    if (score === 80)
    {
        return "F";
    }
}

function main()
{
    console.log(grade(1, 92));
    console.log(grade(3, 0));
    console.log(grade(4, 80));
}

main();
