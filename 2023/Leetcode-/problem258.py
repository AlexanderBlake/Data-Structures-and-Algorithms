class Solution:
    def addDigits(self, num: int) -> int:
        result = num
        while num >= 10:
            result = 0
            while num != 0:
                result += num % 10
                num //= 10
            num = result
        return result