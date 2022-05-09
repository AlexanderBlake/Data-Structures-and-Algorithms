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

    return y && x;
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

    // y = (x && z) || (!x && !z);
    y = z === x;
}

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
    // return (a && b) || (!a && !b);
    // return !(a !== b);
    return a === b;
}


function grade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'F';
    } else {
        return 'A';
    }
}
