class Solution:
    def maxDepth(self, s: str) -> int:
        currDepth = 0
        maxDepth = 0
        for char in s:
            if char == '(':
                currDepth += 1
                maxDepth = max(maxDepth, currDepth)
            elif char == ')':
                currDepth -= 1

        return maxDepth