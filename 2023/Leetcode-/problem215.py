class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        # nums.sort()
        # return nums[-1 * k]

        for i in range(len(nums)):
            nums[i] *= -1
        heapq.heapify(nums)

        for i in range(k):
            result = heapq.heappop(nums)
        return result * -1
