/**
 * @param {number} numRows
 * @return {number[][]}
 */
 
/*
    numRows = 0
    result = []

    numRows = 1
    result = [[1]]

    numRows = 2
    result = [[1], [1, 1]]

    numRows = 3
    result = [[1], [1, 1], [1, 2, 1]]

    numRows = 4
    result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
*/

 // n: numRows
 // Time Complexity: O(n^2)
 // Space Complexity: O(1) Constant excluding the output array
var generate = function(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        result.push([]);
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                result[i].push(1);
            } else {
                result[i].push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
    }

    return result;
};