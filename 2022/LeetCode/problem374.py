# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        low = 1
        high = n
        
        while high - low > 1:
            middle = (low + high) // 2
            current = guess(middle)
            
            if current == -1:
                high = middle
            elif current == 1:
                low = middle
            else:
                return middle
        
        if guess(high) == 0:
            return high
        return low