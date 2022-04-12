// Space Complexity: Total O(n) Linear Space, Auxiliary O(1) Constant Space
// Time Complexity: O(n) Linear Time
function castles(elevation) {
    let start = 1;
    while (elevation[start] === elevation[start - 1] && start < elevation.length) {
        start++;
    }

    if (start == elevation.length) {
        return 0;
    }

    let count = (start != 1) ? 1 : 0;
    let increasing = (elevation[start] > elevation[start - 1]) ? true : false;

    /*
    if (elevation[1] > elevation[0]) {
        increasing = true;
    } else {
        increasing = false;
    }
    */

    for (let i = start; i < elevation.length - 1; i++) {
        if (increasing && elevation[i] > elevation[i + 1]) {
            increasing = false;
            count++;
            /*
            ++count;
            count += 1;
            count = count + 1;
            */
        } else if (!increasing && elevation[i] < elevation[i + 1]) {
            increasing = true;
            count++;
        }
    }

    return count;
}

function castlesTests() {
    console.assert(castles([10, 20, 30, 40, 50, 40]) === 1);
    console.assert(castles([10, 9, 8, 7, 6, 5, 6]) === 1);
    console.assert(castles([24, 48, 96, 12, 6, 3, 100]) === 2);
    console.assert(castles([10, 20, 10, 20, 10, 10]) === 3);
    console.assert(castles([10, 10, 10, 10, 10, 10]) === 0);
    console.assert(castles([10, 20, 20, 10, 10, 10]) === 1);
    console.assert(castles([10, 10, 5, 10, 10, 10]) === 2);
}

function main()
{
    castlesTests();
}

main();