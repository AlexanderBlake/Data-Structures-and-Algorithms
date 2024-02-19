class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        myMap = {}
        uniqueValues = set()
        for i in range(len(s)):
            if s[i] not in myMap and t[i] not in uniqueValues:
                myMap[s[i]] = t[i]
                uniqueValues.add(t[i])
            elif s[i] in myMap and myMap[s[i]] == t[i]:
                continue
            else:
                return False
        return True 
            