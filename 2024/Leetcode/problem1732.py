class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        highest = 0
        current = 0

        for num in gain:
            current += num
            highest = max(current, highest)

        return highest