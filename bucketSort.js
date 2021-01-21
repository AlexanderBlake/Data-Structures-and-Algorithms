function rangeMin(data) {
    let min = data[0];
    let max = data[0];

    for (let i = 1; i < data.length; i++) {
        if (min > data[i]) {
            min = data[i];
        } else if (max < data[i]) {
            max = data[i];
        }
    }

    return [max - min, min];
}

function bucketSort(data) {
    let temp;
    let counter = 0;
    let rangeMinimum = rangeMin(data);
    let numOfBuckets = data.length / 2;

    // Step 1: Make the buckets
    let buckets = [];

    for (let i = 0; i < numOfBuckets; i++) {
        buckets.push([]);
    }

    // let buckets = [[], [], [], [], []];

    // Step 2: Throw the values into the correct buckets
    for (let i = 0; i < data.length; i++) {
        // buckets[Math.floor(data[i] / 10)].push(data[i]);

        let index = Math.floor((data[i] - rangeMinimum[1]) * numOfBuckets / rangeMinimum[0]);

        if (index == numOfBuckets) {
            index -= 1;
        }

        buckets[index].push(data[i]);
    }

    console.log(buckets);

    // Step 3: Sort the buckets
    // Iterate through each bucket
    for (let i = 0; i < buckets.length; i++) {

        if (buckets[i].length > 1) {
            // Actual Sort
            for (let j = 0; j < buckets[i].length - 1; j++) {
                for (let k = j + 1; k < buckets[i].length; k++) {
                    if (buckets[i][j] > buckets[i][k]) {
                        temp = buckets[i][j];
                        buckets[i][j] = buckets[i][k];
                        buckets[i][k] = temp;

                        /*buckets[i][j] += buckets[i][k];
                        buckets[i][k] = buckets[i][j] - buckets[i][k];
                        buckets[i][j] -= buckets[i][k];*/
                    }
                }
            }
        }
    }

    // console.log(buckets);

    // Step 4: Grab the values out of the bucket
    for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            data[counter++] = buckets[i][j];
        }
    }

    console.log(data);
}

function bucketSortTests() {
    bucketSort([29, 25, 3, 49, 9, 37, 21, 43]);
    bucketSort([.897, .565, .656, .1234, .665, .3434]);
}

function main() {
    bucketSortTests()
}

main();
