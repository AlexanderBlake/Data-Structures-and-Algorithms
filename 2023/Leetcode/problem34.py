class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        low = 0
        high = len(nums)
        median = (low + high) // 2

        while low < high:
            if nums[median] < target and low != median:
                low = median
            elif nums[median] > target and high != median:
                high = median
            else:
                break
            median = (low + high) // 2

        if len(nums) == 0 or nums[median] != target:
            return [-1, -1]

        low = median
        while low > 0 and nums[low - 1] == target:
            low -= 1

        high = median
        while high + 1 < len(nums) and nums[high + 1] == target:
            high += 1

        return [low, high]