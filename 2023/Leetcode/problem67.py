class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0
        result = ""

        digits = len(a) if len(a) < len(b) else len(b)

        for i in range(1, digits + 1):
            addition = int(a[-1 * i]) + int(b[-1 * i]) + carry
            carry = addition > 1
            result = str(addition % 2) + result

        for num in [a, b]:
            for i in range(digits + 1, len(num) + 1):
                addition = int(num[-1 * i]) + carry
                carry = addition > 1
                result = str(addition % 2) + result

        if carry == 1:
            result = "1" + result
        return result