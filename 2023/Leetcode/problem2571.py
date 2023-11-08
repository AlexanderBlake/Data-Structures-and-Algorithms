class Solution:
    def minOperations(self, n: int) -> int:
        result = 0
        while n != 0:
            goal = 2 ** round(math.log2(n))

            if goal > n:
                diff = goal - n
                i = round(math.log2(diff))
                n += 2 ** i
                
            elif goal == n:
                n = 0
            else:
                diff = n - goal
                i = round(math.log2(diff))
                n -= 2 ** i

            result += 1

        return result
