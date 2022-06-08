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

// Time Complexity: O(n^2) Quadratic Time
function insertionSort(arr) {
    let temp;

    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;

        while (arr[j] < arr[j - 1] && j > 0) {
            arr[j] += arr[j - 1];
            arr[j - 1] = arr[j] - arr[j - 1];
            arr[j] -= arr[j - 1];

            /*
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            */
            j--;
        }
    }

    return arr;
}

// Time Complexity: O(n^2) Quadratic Time
function bubbleSort(arr) {

}

// Time Complexity: O(n^2) Quadratic Time
function selectionSort(arr) {

}

function main() {
    let arr = [24, 12, 48, 96, 6, 3, 100];

    console.log(insertionSort(arr));
}

main();
