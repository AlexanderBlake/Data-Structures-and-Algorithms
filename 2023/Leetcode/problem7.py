from math import log
from math import ceil

class Solution:
    def reverse(self, x: int) -> int:
        isNegative = False
        if x < 0:
            isNegative = True
            x *= -1
        elif x == 0:
            return 0

        result = 0
        placeValue = 10 ** floor(log(x, 10))
        while x != 0:
            result += (x % 10) * placeValue
            x //= 10
            placeValue /= 10

        if result > 2 ** 31 - 1 or result < -2 ** 31:
            return 0
        
        result = int(result)
        return -1 * result if isNegative else result