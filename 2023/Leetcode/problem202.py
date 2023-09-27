class Solution:
    def nextNum(self, n):
        result = 0
        for char in str(n):
            result += int(char) ** 2
        return result

    def isHappy(self, n: int) -> bool:
        mySet = set()

        while n != 1 and n not in mySet:
            mySet.add(n)
            n = self.nextNum(n)
        
        return n == 1