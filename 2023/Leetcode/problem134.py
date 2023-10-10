class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        curr = 0
        start = 0
        prevSum = 0
        for i in range(len(gas)):
            curr += gas[i] - cost[i]

            if curr < 0:
                start = i + 1
                prevSum += curr
                curr = 0

        return start if start < len(gas) and curr + prevSum >= 0 else -1