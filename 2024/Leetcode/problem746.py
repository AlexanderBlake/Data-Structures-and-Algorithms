class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        two_back = cost[0]
        one_back = cost[1]

        for curr in cost[2:]:
            curr = min(two_back + curr, one_back + curr)

            two_back = one_back
            one_back = curr

        return min(two_back, one_back)