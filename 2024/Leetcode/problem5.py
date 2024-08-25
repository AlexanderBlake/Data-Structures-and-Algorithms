class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = s[0]

        for i in range(len(s)):
            for vals in [(i, i), (i, i + 1)]:
                left, right = vals
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    left -= 1
                    right += 1

                if right - left - 1 > len(result):
                    result = s[left + 1 : right]
            
        return result