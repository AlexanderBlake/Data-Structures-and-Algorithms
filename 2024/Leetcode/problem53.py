class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currSum = nums[0]
        maxSum = currSum
        for i in range(1, len(nums)):
            if currSum < 0:
                currSum = 0

            currSum += nums[i]
            if currSum > maxSum:
                maxSum = currSum

        return maxSum