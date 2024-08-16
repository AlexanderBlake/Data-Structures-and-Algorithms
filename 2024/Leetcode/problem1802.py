class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        x = 0
        if index != 0:
            x += index * (1 + index) / 2
        if index < n - 1:
            x += n * (n - 1 - index) / 2

        low = 1
        high = int((maxSum + x) / n) + 1

        while low <= high:
            val = (low + high) // 2
            print(low, high, val)

            if index >= val:
                leftSum = index - val + 1
                leftSum += val * (1 + val) / 2
            else:
                leftSum = (index + 1) * (val - index + val) / 2

            rightN = n - index - 1
            if rightN >= val:
                rightSum = rightN - val + 1
                rightSum += (val - 1) * (1 + val - 1) / 2
            else:
                rightSum = (rightN) * (val - 1 + val - rightN) / 2

            if leftSum + rightSum <= maxSum:
                best = val
                low = val + 1
            else:
                high = val - 1

        return best
