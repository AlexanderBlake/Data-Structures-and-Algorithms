class Solution:
    def __init__(self):
        self.WATER = "0"
        self.ISLAND = "1"

    def findIsland(self, grid: List[List[str]], i: int, j: int) -> None:
        if 0 <= i < len(grid) and 0 <= j < len(grid[i]) and grid[i][j] == self.ISLAND:
            grid[i][j] = self.WATER
            self.findIsland(grid, i + 1, j)
            self.findIsland(grid, i - 1, j)
            self.findIsland(grid, i, j + 1)
            self.findIsland(grid, i, j - 1)


    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == self.ISLAND:
                    count += 1
                    self.findIsland(grid, i, j)

        return count