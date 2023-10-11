class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 1:
            return [[nums[0]]]

        result = self.permute(nums[1:])
        values = []
        for i in range(len(result)):
            for j in range(len(result[i]) + 1):
                permutation = result[i].copy()
                permutation.insert(j, nums[0])
                values.append(permutation)

        return values