class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = [];
        this.hashFunction = 7;

        for (let i = 0; i < this.hashFunction; i++) {
            this.table.push(null);
        }
    }

    insert(value) {
        let index = value % this.hashFunction;

        if (!this.table[index]) {
            this.table[index] = new Node(value);
        } else {
            let walker = this.table[index];
            while (walker.next) {
                walker = walker.next;
            }

            walker.next = new Node(value);
        }
    }

    remove(value) {
        let index = value % this.hashFunction;

        if (this.table[index]) {
            let walker = this.table[index];

            while (walker.value != value && walker.next) {
                walker = walker.next;
            }

            /*if (walker.value == value) {
                this.table[index] = this.table[index].next;
            }*/
        }
    }

    display() {
        let str;
        let walker;

        for (let i = 0; i < this.table.length; i++) {
            str = "[" + i + "]: ";
            if (!this.table[i]) {
                str += "Empty";
            } else {
                walker = this.table[i];

                while (walker.next) {
                    str += walker.value + " -> ";
                    walker = walker.next;
                }

                str += walker.value;
            }

            console.log(str);
        }
    }
}

// Average Time Complexity: O(n^2)
// Best Time Complexity: O(n)
// Worst Time Complexity: O(n^2)
// Space Complexity: O(n)
function insertionSort(arr) {
    for(let e=0; e<arr.length - 1; e++){
        for(let d = e + 1; d > 0; d--){
            if (arr[d]< arr[d-1]) {
                let forSwitch = arr[d];
                arr[d] = arr[d-1];
                arr[d-1] = forSwitch;
            } else {
                break;
            }
        }

    }

    printArray(arr);
}

// Average Time Complexity: O(n^2)
// Best Time Complexity: O(n)
// Worst Time Complexity: O(n^2)
// Space Complexity: O(n)
function bubbleSort(arr) {
    let sorted;

    for(let i=0; i<arr.length; i++) {
        sorted = true;
        for(let j=0; j<arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    printArray(arr);
}

// Average Time Complexity: O(n^2)
// Best Time Complexity: O(n^2)
// Worst Time Complexity: O(n^2)
// Space Complexity: O(n)
function selectionSort(arr) {
    for(let m = 0; m < arr.length-1; m++) {

        let smallest = m;
        let swapHolder;
        for(let n = m+1; n< arr.length; n++) {
            if(arr[n] < arr[smallest]){
                smallest = n;
            }
        }
        if(smallest !== m){
            swapHolder = arr[smallest];
            arr[smallest] = arr[m];
            arr[m] = swapHolder;
        }
    }

    printArray(arr);
}

function printArray(arr) {
    let str = "["
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i != arr.length - 1) {
            str += ", ";
        }
    }

    console.log(str + "]");
}

function main() {
    /*
    selectionSort([]);
    selectionSort([1]);
    selectionSort([1, 2]);
    selectionSort([2, 1]);
    selectionSort([1, 2, 3]);
    selectionSort([3, 2, 1]);
    selectionSort([2, 1, 3]);
    selectionSort([1, 3, 5, 4, 2]);
    */

    /*
    insertionSort([]);
    insertionSort([1]);
    insertionSort([1, 2]);
    insertionSort([2, 1]);
    insertionSort([1, 2, 3]);
    insertionSort([3, 2, 1]);
    insertionSort([2, 1, 3]);
    insertionSort([1, 3, 5, 4, 2]);
    */

    /*
    bubbleSort([]);
    bubbleSort([1]);
    bubbleSort([1, 2]);
    bubbleSort([2, 1]);
    bubbleSort([1, 2, 3]);
    bubbleSort([3, 2, 1]);
    bubbleSort([2, 1, 3]);
    bubbleSort([1, 3, 5, 4, 2]);
    */

    table = new HashTable();

    table.insert(24);
    table.insert(21);
    table.insert(14);
    table.insert(1);
    table.insert(66);
    table.insert(55);
    table.insert(44);
    table.insert(33);
    table.insert(34);
    table.insert(41);

    table.display();
}

main();
