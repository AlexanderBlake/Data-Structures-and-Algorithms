function subArray(arr1, arr2, subset = [], flag = true) {
    if (subset.length > 1 && flag) {
        console.log(subset);
    }

    for (let i = 0; i < arr1.length; i++) {
        if (subset.length == 0 || arr1[i] > subset[subset.length - 1]) {
            subset.push(arr1[i]);
            subArray(arr2, arr1, subset, !flag);
        }
    }

    if (flag) {
        console.log(subset);
    }
}

// Time Complexity: O(n^2) -> O(n^2 + n)
// Space Complexity: O(n) -> O(2n)
function simpleZigZag(arr) {
    newArr = [];

        newArr.push(arr[i]);
    for (let i = 0; i < arr.length; i++) {
    }  

    for (let i = 0; i < arr.length - 1; i++){
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }

    for (let i = 0; i < newArr.length / 2; i++) {
        newArr[i] = arr[i];
        newArr[i + 1] = arr[arr.length - 1 - i];
    }

    return newArr;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function zigzag(arr) {
    for (let i = 0; i < arr.length; i++)
    {
        let item = arr[i];
        if (i % 2 != 0)
        {
            if(item < arr[i+1])
            {
                swap(arr, i, i + 1);
            }
        }
        else 
        {
            if(item > arr[i+1])
            {
                swap(arr, i, i + 1);
            }
        }
    }
    return arr;
}

function swap(arr, a, b)
{
    // arr[a] = arr[a] + arr[b]
    arr[a] += arr[b];

    arr[b] = arr[a] - arr[b];

    // arr[a] = arr[a] - arr[b]
    arr[a] -= arr[b];
}

function main()
{
    /*
    console.log(zigzag([4, 3, 7, 8, 6, 2, 1]));
    console.log(zigzag([1, 4, 3, 2]));

    console.log(simpleZigZag([4, 3, 7, 8, 6, 2, 1]));
    console.log(simpleZigZag([1, 4, 3, 2]));
    */

    subArray([10, 15, 25], [1, 5, 20, 30]);

}

main();