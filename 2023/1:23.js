function getMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // max set only if current larger than max
        if (arr[i] > max) {
            max = arr[i];
        }   
    }

    return max; 
}

function getVelocity(dist, time) {
    return dist / time;
}

function main() {
    console.log(getMax([1, 2, -3, 4.14, -5.25, 72, 24]));
    console.log(getMax([-1, -2, -3, -4.14, -5.25, -72, -24]));
}

main();
