class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        for i in range(len(prices) - 1):
            buyprice = prices[i]
            sellprice = prices[i + 1]

            profit = sellprice - buyprice
            if profit > 0:
                result += profit
        
        return result
