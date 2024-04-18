class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            if nums[i] <= 0:
                nums[i] = len(nums) + 1
            
        for val in nums:
            index = abs(val)
            if 1 <= index <= len(nums):
                nums[index - 1] = -1 * abs(nums[index - 1])

        for i in range(len(nums)):
            if nums[i] >= 0:
                return i + 1
        return len(nums) + 1
