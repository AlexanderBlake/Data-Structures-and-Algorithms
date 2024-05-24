class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        fast = nums[nums[0]]
        slow = nums[0]
        slow2 = 0

        while fast != slow:
            fast = nums[nums[fast]]
            slow = nums[slow]

        while slow2 != slow:
            slow2 = nums[slow2]
            slow = nums[slow]

        return slow
