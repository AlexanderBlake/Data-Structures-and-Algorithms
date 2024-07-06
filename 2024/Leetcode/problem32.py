class Solution:
    def longestValidParentheses(self, s: str) -> int:
        stack = [-1]
        longest = 0
        
        for i in range(len(s)):
            if stack[-1] != -1 and s[i] == ')' and s[stack[-1]] == '(':
                stack.pop()
                longest = max(longest, i - stack[-1])
            else:
                stack.append(i)

        return longest