class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        index = -1
        while index * -1 <= len(s) and s[index] == ' ':
            index -= 1

        length = 0
        while index * -1 <= len(s) and s[index] != ' ':
            length += 1
            index -= 1

        return length