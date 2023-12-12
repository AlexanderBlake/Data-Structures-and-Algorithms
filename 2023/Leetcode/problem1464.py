class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        highest = max(nums)
        index = nums.index(highest)
        return (highest - 1) * (max(nums[:index] + nums[index + 1:]) - 1)