class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        longest = 0
        mySet = set()
        
        for i in range(len(s)):
            if s[i] not in mySet:
                mySet.add(s[i])
                if len(mySet) > longest:
                    longest = len(mySet)

            else:
                while s[i] != s[start]:
                    mySet.remove(s[start])
                    start += 1
                start += 1

        return longest