class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        locations = {}

        for word in strs:
            count = tuple(sorted(word))

            if count not in locations:
                locations[count] = [word]
            else:
                locations[count].append(word)

        return list(locations.values())