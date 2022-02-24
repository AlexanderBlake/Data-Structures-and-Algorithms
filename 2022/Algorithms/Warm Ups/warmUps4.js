// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) (Total), O(1) (Auxiliary)
function secondLargest(arr)
{
    let second = -Infinity;
    let largest = -Infinity;

    if (arr.length === 1)
    {
        return arr[0];
    }
    else if (arr.length === 0)
    {
        return -Infinity;
    }

    /*
    if (arr[0] < arr[1])
    {
        second = arr[0];
        largest = arr[1];
    }
    else
    {
        second = arr[1];
        largest = arr[0];
    }
    */

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > largest) 
        {
            second = largest;
            largest = arr[i];
        }
        else if ((arr[i] > second && arr[i] !== largest) || second == -Infinity)
        {
            second = arr[i];
        }
        else if (largest === second && arr[i] !== second)
        {
            second = arr[i];
        }
    }

    return second;
}

function DectoBinary(decNum)
{
    if (decNum == 0)
    {
        return "0"
    }

    let binaryNum = "";
    let dec = parseInt(decNum);
    let exp = Math.floor(Math.log(dec) / Math.log(2));

    while (exp >= 0)
    {
        let placeValue = 2 ** exp--;
        if (placeValue <= dec)
        {
            dec -= placeValue;
            binaryNum += "1";
        }
        else 
        {
            binaryNum += "0";
        }
    }

    return binaryNum;
}

function DectoBinaryTests()
{
    console.assert(DectoBinary("0") === "0", 0);
    console.assert(DectoBinary("1") === "1", 1);
    console.assert(DectoBinary("2") === "10", 2);
    console.assert(DectoBinary("8") === "1000", 8);
    console.assert(DectoBinary("24") === "11000", 24);
    console.assert(DectoBinary("26") === "11010", 26);
}

function DectoHex(n)
{

}

function BinarytoDec(n)
{
    decNum = 0;

    /*
    for (let i = 0; i < n.length; i++)
    {
        decNum += n[i] * 2 ** (n.length - 1 - i);
    }
    */

    for (let i = n.length - 1; i >= 0; i--)
    {
        decNum += n[i] * 2 ** (n.length - 1 - i);
    }

    return decNum;
}

function BinarytoDecTests()
{
    console.assert(BinarytoDec("0") === 0);
    console.assert(BinarytoDec("1") === 1);
    console.assert(BinarytoDec("10") === 2);
    console.assert(BinarytoDec("1000") === 8);
    console.assert(BinarytoDec("11000") === 24);
    console.assert(BinarytoDec("11010") === 26);
}

function BinarytoHex(n)
{

}

function HextoBinary(n)
{

}

function HextoDec(n)
{

}

function twoSum(nums, target)
{
    let value;
    let complementPair;
    let map = {};

    for (let i = 0; i < nums.length; i++)
    {
        key = nums[i];
        complementPair = target - key;
        if (map[complementPair] !== undefined)
        {
            return [map[complementPair], i];
        }
        else
        {
            map[key] = i;
        }
    }
}

function secondLargestTests()
{
    console.assert(secondLargest([4, 1, 2, 3, 5]) === 4, "First index");
    console.assert(secondLargest([1, 4, 2, 3, 5]) === 4, "Second index");
    console.assert(secondLargest([0, 2, 4, 3, 5]) === 4, "Middle index");
    console.assert(secondLargest([1, 2, 3, 4, 5]) === 4, "Second to last index");
    console.assert(secondLargest([-1, 2, 3, 5, 4]) === 4, "Last index");
    console.assert(secondLargest([-1, 5, 4, 3, 2]) === 4, "Second Largest is after largest");
    console.assert(secondLargest([5, 4, 3, 2, 1]) === 4, "Largest is the first element");
    console.assert(secondLargest([5]) === 5, "One element list");
    console.assert(secondLargest([]) === -Infinity, "Empty list");
    console.assert(secondLargest([4, 5]) === 4, "Two element list 1");
    console.assert(secondLargest([5, 4]) === 4, "Two element list 2");
    console.assert(secondLargest([5, 5, 5]) === 5, "Duplicates test 1");
    console.assert(secondLargest([5, 5, 4, 5, 5]) === 4, "Duplicates test 2");
}

function main()
{
    secondLargestTests();
    DectoBinaryTests();
    BinarytoDecTests();
    // console.log(twoSum([1, 5, 9], 10));
}

main();
