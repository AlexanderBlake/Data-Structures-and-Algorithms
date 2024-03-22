class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if len(coins) == 1:
            return amount // coins[0] if amount % coins[0] == 0 else -1

        amount += 1
        table = [float('inf')] * amount

        for i in range(len(coins)):
            for j in range(amount):
                if i == 0 and j % coins[i] == 0:
                    table[j] = j // coins[i]
                elif j - coins[i] >= 0 and table[j - coins[i]] + 1 < table[j]:
                    table[j] = table[j - coins[i]] + 1

        return table[-1] if table[-1] != float('inf') else -1
