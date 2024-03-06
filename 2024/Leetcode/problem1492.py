class Solution:
    def kthFactor(self, n: int, k: int) -> int:
        factors = []
        for val in range(1, int(math.sqrt(n)) + 1):
            if n % val == 0:
                if k == 1:
                    return val
                k -= 1
                if math.sqrt(n) != val:
                    factors.append((n // val))
        
        return -1 if k > len(factors) else factors[-1 * k]