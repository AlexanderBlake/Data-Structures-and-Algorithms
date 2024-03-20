/**
 * @param {character[][]} grid
 * @return {number}
 */
function inBounds(grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[i].length;
}

function dfsTraversal(grid, i, j) {
    if (!inBounds(grid, i, j) || grid[i][j] == '0') {
        return;
    }

    grid[i][j] = '0';

    dfsTraversal(grid, i + 1, j);
    dfsTraversal(grid, i - 1, j);
    dfsTraversal(grid, i, j + 1);
    dfsTraversal(grid, i, j - 1);
}

var numIslands = function(grid) {
    let islands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '1') {
                islands++;
                console.log(i, j);
                dfsTraversal(grid, i, j);
            }
        }
    }

    return islands;
};