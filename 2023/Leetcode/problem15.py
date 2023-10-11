class Solution:
    def twoSumSorted(self, nums, target, triplets):
        low = 0
        high = -1
        
        result = []
        while low < len(nums) + high:
            if nums[low] + nums[high] > target:
                high -= 1
            else:
                if nums[low] + nums[high] == target:
                    triplets.add((target * -1, nums[low], nums[high]))
                low += 1
        
        return result

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        triplets = set()

        for i in range(1, len(nums) - 1):
            if nums[i - 1] <= 0:
                self.twoSumSorted(nums[i:], -1 * nums[i - 1], triplets)

        return triplets