class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        numsList = []

        for i in range(0, len(nums)):
            if nums[i] not in numsList:
                numsList.append(nums[i])

            else:
                numsList.pop(numsList.index(nums[i]))

        return numsList[0]