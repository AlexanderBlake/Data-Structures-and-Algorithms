class Solution:
    def count(self, myStr: str) -> str:
        result = []

        count = 1
        curr = myStr[0]
        for char in myStr[1:]:
            if char == curr:
                count += 1
            else:
                result.append(str(count))
                result.append(curr)

                count = 1
                curr = char

        result.append(str(count))
        result.append(curr)
        return ''.join(result)

    def countAndSay(self, n: int) -> str:
        curr = '1'

        for i in range(2, n + 1):
            curr = self.count(curr)

        return curr