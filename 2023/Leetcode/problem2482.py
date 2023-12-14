class Solution:
    def onesMinusZeros(self, grid: List[List[int]]) -> List[List[int]]:
        onesRow = [0] * len(grid)
        onesCol = [0] * len(grid[0])

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    onesRow[i] += 1
                    onesCol[j] += 1

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                grid[i][j] = 2 * (onesRow[i] + onesCol[j]) - len(grid[i]) - len(grid)

        return grid