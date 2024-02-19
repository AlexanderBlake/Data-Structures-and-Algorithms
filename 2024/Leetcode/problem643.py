class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxSum = sum(nums[:k])
        currentSum = maxSum

        for i in range(k, len(nums)):
            currentSum += nums[i]
            currentSum -= nums[i - k]
            if currentSum > maxSum:
                maxSum = currentSum
 
        return maxSum / k
