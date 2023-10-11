class Solution:
    def __init__(self):
        self.WATER = 0


    def inBounds(self, grid, i, j):
        return 0 <= i < len(grid) and 0 <= j < len(grid[i])


    def dfs(self, grid, i, j, visited):
        if not self.inBounds(grid, i, j) or grid[i][j] == self.WATER or (i, j) in visited:
            return 0

        visited.add((i, j))

        up = self.dfs(grid, i + 1, j, visited)
        down = self.dfs(grid, i - 1, j, visited)
        right = self.dfs(grid, i, j + 1, visited)
        left = self.dfs(grid, i, j - 1, visited)

        return up + down + right + left + 1


    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        myMax = 0
        visited = set()

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] != self.WATER and (i, j) not in visited:
                    myMax = max(myMax, self.dfs(grid, i, j, visited))

        return myMax