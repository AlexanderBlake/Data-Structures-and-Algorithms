class NumArray:

    def __init__(self, nums: List[int]):
        self.arr = []

        currSum = 0
        for num in nums:
            currSum += num
            self.arr.append(currSum)


    def sumRange(self, left: int, right: int) -> int:
        leftVal = 0 if left == 0 else self.arr[left - 1]
        return self.arr[right] - leftVal


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)