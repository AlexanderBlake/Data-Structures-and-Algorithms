class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complements = {}
        
        for i in range(len(nums)):
            if nums[i] not in complements:
                complements[target - nums[i]] = i
            else:
                return [complements[nums[i]], i]