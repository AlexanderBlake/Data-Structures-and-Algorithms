class Solution:
    def partitionString(self, s: str) -> int:
        mySet = set()
        result = 1
        for char in s:
            if char not in mySet:
                mySet.add(char)
            else:
                mySet = set(char)
                result += 1

        return result