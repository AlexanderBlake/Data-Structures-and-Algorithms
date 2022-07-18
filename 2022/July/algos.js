function nand(a, b) {
    return !(a && b);
}

function nor(a, b) {
    return !(a || b);
}

function xor(a, b) {
    return a !== b;
}

function xnor(a, b) {
    return a === b;
}

function challenge1(x, y)
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

function challenge2(x, y)
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

function challenge3(x, z)
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
