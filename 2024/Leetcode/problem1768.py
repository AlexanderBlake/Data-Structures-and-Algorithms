class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        i1 = 0
        i2 = 0
        result = []

        while i1 < len(word1) and i2 < len(word2):
            result.append(word1[i1])
            result.append(word2[i2])
            i1 += 1
            i2 += 1

        if i1 == len(word1):
            result.append(word2[i2:])
        else:
            result.append(word1[i1:])
        return ''.join(result)