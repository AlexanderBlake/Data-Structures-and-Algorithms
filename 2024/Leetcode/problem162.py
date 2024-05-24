class Solution:
    def isPeak(self, nums: List[int], guess: int) -> int:
        if guess == 0:
            return nums[0] > nums[1] if len(nums) > 1 else True
        elif guess == len(nums) - 1:
            return nums[-1] > nums[-2]
        return nums[guess - 1] < nums[guess] and nums[guess + 1] < nums[guess]

    def findPeakElement(self, nums: List[int]) -> int:
        low = 0
        high = len(nums) - 1
        guess = (low + high) // 2

        while not self.isPeak(nums, guess) and low + 1 < high:
            if nums[guess + 1] > nums[guess - 1]:
                low = guess
            else:
                high = guess
            guess = (low + high) // 2

        return guess if self.isPeak(nums, guess) else high