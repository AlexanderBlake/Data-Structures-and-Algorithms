class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums)
        guess = len(nums) // 2

        while nums[guess] != target and low + 1 < high:
            if nums[guess] < target:
                low = guess
            elif nums[guess] > target:
                high = guess

            guess = (low + high) // 2

        if nums[guess] >= target:
            return guess
        return guess + 1