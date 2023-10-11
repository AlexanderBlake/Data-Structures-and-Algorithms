class Solution:
    def hammingWeight(self, n: int) -> int:
        if n == 0:
            return 0

        placeValue = 2 ** int(math.log2(n))
        hamming = 0

        while n != 0:
            if n >= placeValue:
                n -= placeValue
                hamming += 1
            placeValue /= 2

        return hamming