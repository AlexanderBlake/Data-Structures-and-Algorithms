class Solution:
    def combinationBuilder(self, nums: List[int], current: List[int] = [], index: int = -1) -> List[List[int]]:
        result = [current]
        for i in range(index + 1, len(nums)):
            newLists = self.combinationBuilder(nums, current + [nums[i]], i)
            for item in newLists:
                result.append(item)

        return result


    def subsets(self, nums: List[int]) -> List[List[int]]:
        return self.combinationBuilder(nums)