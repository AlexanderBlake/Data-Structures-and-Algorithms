class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        placeValueCounter = 0
        while n != 0:
            if n - 2 ** (31 - placeValueCounter) >= 0:
                result += 2 ** placeValueCounter
                n -= 2 ** (31 - placeValueCounter)

            placeValueCounter += 1

        return result