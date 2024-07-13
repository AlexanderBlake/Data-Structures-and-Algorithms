class Solution:
    def removeStars(self, s: str) -> str:
        myStack = []

        for ch in s:
            if ch == '*':
                myStack.pop()
            else:
                myStack.append(ch)

        return ''.join(myStack)