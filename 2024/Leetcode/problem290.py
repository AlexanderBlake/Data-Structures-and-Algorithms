class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        myMap = {}
        uniqueWords = set()
        splitStr = s.split(' ')

        if len(pattern) != len(splitStr):
            return False

        for i in range(len(splitStr)):
            if pattern[i] not in myMap and splitStr[i] not in uniqueWords:
                myMap[pattern[i]] = splitStr[i]
                uniqueWords.add(splitStr[i])
            elif pattern[i] in myMap and myMap[pattern[i]] == splitStr[i]:
                continue
            else:
                return False

        return True
