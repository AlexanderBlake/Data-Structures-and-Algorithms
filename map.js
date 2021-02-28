// An e-commerce site tracks the purchases made each day.
// The product that is purchased the most one day is the featured product for the following day.
// If there is a tie for the product purchased most frequently, those product names are ordered alphabetically ascending and the last name in the list is chosen.

/*
Network mapping tool with
 n node tree with potential unknown nodes
Define the structure of the network given ARP tables from the participating router/switches
*/

// Time Complexity: O(2n) = O(n) Linear Time
// Space Complexity: O(2n) = O(n) Linear Space
function findMostMap(arr) {
    let largestKey;
    let largestVal = 0;
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let currentVal;
    for (const keyValue of map) {
        currentVal = keyValue[1];

        if (currentVal > largestVal) {
            largestVal = currentVal;
            largestKey = keyValue[0];
        } else if (currentVal == largestVal && keyValue[0] > largestKey) {
            largestVal = currentVal;
            largestKey = keyValue[0];
        }
    }

    return largestKey;
}

function main() {
    let products = ['redShirt', 'greenPants', 'redShirt', 'orangeShoes', 'blackPants', 'blackPants'];
    console.log(findMostMap(products));

    console.log(findMostMap(["Green Pants", "Black Shirt", "Black Shirt", "Green Pants", "Red Skirt", "Purple Shoes", "Blue Shirt"]));
}

main();
