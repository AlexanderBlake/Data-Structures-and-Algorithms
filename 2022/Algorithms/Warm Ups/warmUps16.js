function nand() {
	
}

function nor() {
	
}

function xor() {

}

function xnor() {

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
    /*
    if (x && y) return true;
    return false;
    */
    return (x && y);
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
    y = (x === z);
}
