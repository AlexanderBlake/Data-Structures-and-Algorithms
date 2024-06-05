class Solution:
    def countBits(self, n: int) -> List[int]:
        if n < 2:
            return [i for i in range(n + 1)]

        result = [0, 1]
        for i in range(2, n + 1):
            result.append(result[i - 2 ** math.floor(math.log2(i))] + 1)

        return result
