class Solution:
    def isDivisible(self, dividend: str, divisor: str) -> bool:
        return divisor * (len(dividend) // len(divisor)) == dividend


    def gcdOfStrings(self, str1: str, str2: str) -> str:
        gcd = ''
        dividend = str1 if len(str1) < len(str2) else str2
        
        for i in range(len(dividend)):
            divisor = dividend[:i + 1]
            if self.isDivisible(str1, divisor) and self.isDivisible(str2, divisor):
                gcd = divisor

        return gcd