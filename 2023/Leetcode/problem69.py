class Solution:
    def mySqrt(self, x: int) -> int:
        if x <= 1:
            return x

        low = 0
        high = x
        guess = (low + high) // 2

        while guess * guess != x and high - low > 1:
            if guess * guess < x:
                low = guess
            elif guess * guess > x:
                high = guess

            guess = (low + high) // 2

        if high * high == x:
            return high
        return guess