class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        k = 1
        instances = 1
        while i + instances < len(nums):
            while i + instances < len(nums) and nums[i] == nums[i + instances]:
                instances += 1

            if i + instances < len(nums):
                nums[i + 1] = nums[i + instances]
                i += 1
                k += 1

        return k