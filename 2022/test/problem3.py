class Solution:
    def removeCharsFromDict(self, subStr: dict, index: int) -> None:
        for key in list(subStr):
            if subStr[key] < index:
                del subStr[key]


    def lengthOfLongestSubstring(self, s: str) -> int:
        longestSubStr = 0
        subStr = {}

        for i in range(len(s)):
            if s[i] in subStr.keys():
                longestSubStr = max(longestSubStr, len(subStr))
                self.removeCharsFromDict(subStr, subStr[s[i]])

            subStr[s[i]] = i

        return max(longestSubStr, len(subStr))