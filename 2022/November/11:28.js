function solution(A) {

    A = A.filter(x => x >= 1).sort((a, b) => a - b)

    let x = 1

    for (let i = 0; i < A.length; i++) {
        if (x < A[i]) {
            return x
        }
        x = A[i] + 1
    }

    return x
}

function bubbleSort(arr) {
    let swapped;

    do {
        let temp;
        swapped = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

function main() {
    console.assert(solution([1, 3, 6, 4, 1, 2]) === 5, "Test 1");
    console.assert(solution([1, 2, 3]) === 4, "Test 2");
    console.assert(solution([-1, -3]) === 1, "Test 3");

    console.log(bubbleSort([1, 24, 2, 0, 48]));
}

main();