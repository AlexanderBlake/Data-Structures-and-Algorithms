class Solution {
    public final char WATER = '0';
    public final char LAND = '1';

    public void dfsTraversal(char[][] grid, int area, int i, int j) {
        grid[i][j] = WATER;

        if (j + 1 < grid[i].length && grid[i][j + 1] == LAND) {
            dfsTraversal(grid, area + 1, i, j + 1);
        }
        if (j - 1 >= 0 && grid[i][j - 1] == LAND) {
            dfsTraversal(grid, area + 1, i, j - 1);
        }
        if (i + 1 < grid.length && grid[i + 1][j] == LAND) {
            dfsTraversal(grid, area + 1, i + 1, j);
        }
        if (i - 1 >= 0 && grid[i - 1][j] == LAND) {
            dfsTraversal(grid, area + 1, i - 1, j);
        }
    }

    public int numIslands(char[][] grid) {
        int islandCount = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == LAND) {
                    dfsTraversal(grid, 1, i, j);
                    islandCount++;
                }
            }
        }

        return islandCount;
    }
}