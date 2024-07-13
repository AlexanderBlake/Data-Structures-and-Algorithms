class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        result = 0
        vowels = set(['a', 'e', 'i', 'o', 'u'])

        for i in range(k):
            if s[i] in vowels:
                result += 1

        current = result
        for i in range(k, len(s)):
            if s[i] in vowels:
                current += 1
            if s[i - k] in vowels:
                current -= 1
            result = max(current, result)

        return result