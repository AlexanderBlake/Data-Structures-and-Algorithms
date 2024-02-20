class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        pivot = 0
        leftSum = 0
        rightSum = sum(nums[1:])

        while pivot < len(nums) - 1:
            if leftSum == rightSum:
                return pivot

            pivot += 1
            leftSum += nums[pivot - 1]
            rightSum -= nums[pivot]

        return pivot if leftSum == rightSum else -1
