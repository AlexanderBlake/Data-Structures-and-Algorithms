class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        occurences = {}
        for char in s:
            if char in occurences:
                occurences[char] += 1
            else:
                occurences[char] = 1
        
        for char in t:
            if char in occurences:
                occurences[char] -= 1
                if occurences[char] < 0:
                    return False
            else:
                return False

        for key, value in occurences.items():
            if value > 0:
                return False

        return True