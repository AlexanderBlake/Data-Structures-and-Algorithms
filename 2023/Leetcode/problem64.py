import heapq
    
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        if len(grid) == 1 and len(grid[0]) == 1:
            return grid[0][0]

        weights = []
        for i in range(len(grid)):
            weights.append([])
            for j in range(len(grid[i])):
                weights[i].append(float('inf'))

        pq = []
        weights[0][0] = grid[0][0]
        
        if len(grid) > 1:
            heapq.heappush(pq, (grid[1][0] + weights[0][0], (1, 0)))
        if len(grid[i]) > 1:
            heapq.heappush(pq, (grid[0][1] + weights[0][0], (0, 1)))

        while len(pq) != 0:
            currWeight, currPosition = heapq.heappop(pq)
            i, j = currPosition
            if currWeight < weights[i][j]:
                weights[i][j] = currWeight

                if i + 1 < len(grid) and weights[i + 1][j] > currWeight + grid[i + 1][j]:
                    heapq.heappush(pq, (currWeight + grid[i + 1][j], (i + 1, j)))
                if j + 1 < len(grid[i]) and weights[i][j + 1] > currWeight + grid[i][j + 1]:
                    heapq.heappush(pq, (currWeight + grid[i][j + 1], (i, j + 1)))

        return weights[-1][-1]