class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        result = []
        current = 0

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1] + 1:
                if current != i - 1:
                    result.append(str(nums[current]) + '->' + str(nums[i - 1]))
                else:
                    result.append(str(nums[i - 1]))
                current = i

        if current != len(nums) - 1:
            result.append(str(nums[current]) + '->' + str(nums[-1]))
        else:
            result.append(str(nums[-1]))
        return result