function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        let temp = arr[smallestIndex];
        arr[smallestIndex] = arr[i];
        arr[i] = temp;
    }

    console.log(arr);
}

function main() {
    selectionSort([33, 47, 46, 3, 38, 50, 2, 40, 42, 17, 17, 20, 49]);
}

main();