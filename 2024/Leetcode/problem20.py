class Solution:
    def isValid(self, s: str) -> bool:
        myStack = []
        matches = {'}': '{', ']': '[', ')': '('}

        for char in s:
            if char in matches.values():
                myStack.append(char)
            elif len(myStack) != 0 and matches[char] == myStack[-1]:
                myStack.pop()
            else:
                return False
        return len(myStack) == 0