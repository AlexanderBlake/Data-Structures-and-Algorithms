function challenge1(x)
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

    y = (x && z) || (!x && !z);
    y = x === z;
}

function nand(a, b)
{

}

function nor(a, b)
{

}

function xor(a, b)
{
    
}