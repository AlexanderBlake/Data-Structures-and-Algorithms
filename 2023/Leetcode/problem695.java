class Solution {
    public final int WATER = 0;
    public final int LAND = 1;

    public int dfsArea(int[][] grid, int area, int i, int j) {
        grid[i][j] = WATER;

        if (j + 1 < grid[i].length && grid[i][j + 1] == LAND) {
            area = dfsArea(grid, area + 1, i, j + 1);
        }
        if (j - 1 >= 0 && grid[i][j - 1] == LAND) {
            area = dfsArea(grid, area + 1, i, j - 1);
        }
        if (i + 1 < grid.length && grid[i + 1][j] == LAND) {
            area = dfsArea(grid, area + 1, i + 1, j);
        }
        if (i - 1 >= 0 && grid[i - 1][j] == LAND) {
            area = dfsArea(grid, area + 1, i - 1, j);
        }

        return area;
    }

    public int maxAreaOfIsland(int[][] grid) {
        int currArea;
        int maxArea = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == LAND) {
                    currArea = dfsArea(grid, 1, i, j);
                    if (currArea > maxArea) {
                        maxArea = currArea;
                    }
                }
            }
        }

        return maxArea;
    }
}