class Solution:
    def removeDuplicates(self, s: str) -> str:
        myStack = []
        for char in s:
            if len(myStack) != 0 and char == myStack[-1]:
                myStack.pop()
            else:
                myStack.append(char)
            
        return ''.join(myStack)
