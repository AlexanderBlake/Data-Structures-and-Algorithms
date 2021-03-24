// Time Complexity: O(n^2)
// Space Complexity: O(n) Total, O(1) Auxiliary

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }

        /*
        temp = arr[smallestIndex];
        arr[smallestIndex] = arr[i];
        arr[i] = temp;
        */

        if (smallestIndex != i) {
            arr[smallestIndex] += arr[i];
            arr[i] = arr[smallestIndex] - arr[i];
            arr[smallestIndex] -= arr[i];
        }
    }

    console.log(arr);

    return arr;
}


function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function main() {
    /*console.assert(isSorted(selectionSort([1, 2, 3])));
    console.assert(isSorted(selectionSort([0, 0, 0])));*/
    console.assert(isSorted(selectionSort([3, 2, 1])));
    // console.assert(isSorted(selectionSort([3])));
}

main();
