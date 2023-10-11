class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        previous = [1] * n

        for i in range(1, m):
            current = [1]
            for j in range(1, n):
                current.append(current[-1] + previous[j])
            previous = list(current)

        return previous[-1]