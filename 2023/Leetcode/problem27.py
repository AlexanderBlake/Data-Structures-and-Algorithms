class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        back = -1
        while i <= len(nums) + back:
            if nums[i] == val:
                temp = nums[i]
                nums[i] = nums[back]
                nums[back] = temp
                back -= 1
            else:
                i += 1

        return len(nums) + back + 1