class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 1:
            return strs[0]

        prefixSet = set([""])
        prefix = ""
        for char in strs[0]:
            prefix += char
            prefixSet.add(prefix)

        common = strs[0]
        for word in strs[1:]:
            prefix = ""
            for char in word:
                prefix += char
                if prefix not in prefixSet or len(prefix) > len(common):
                    prefix = prefix[:-1]
                    break

            if len(prefix) < len(common):
                common = prefix

        return common