class Solution:
    def helper(self, curr, result, n: int, k: int):
        if len(curr) == k:
            result.append(curr)

        for i in range(curr[-1] + 1, n + 1):
            self.helper(curr + [i], result, n, k)

    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []

        for i in range(1, n + 1):
            self.helper([i], result, n, k)

        return result
