class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x
        start = current = result = 0

        if target < 0:
            return -1

        for i in range(len(nums)):
            current += nums[i]
            if current == target:
                result = i - start + 1 if i - start + 1 > result else result

            while current > target:
                current -= nums[start]
                start += 1

            if current == target:
                result = i - start + 1 if i - start + 1 > result else result

        if result == 0 and sum(nums[start:]) != target:
            return -1
        return len(nums) - result