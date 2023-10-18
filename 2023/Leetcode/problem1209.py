class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        myStack = []
        for char in s:
            if len(myStack) != 0 and myStack[-1][1] == k - 1 and char == myStack[-1][0]:
                for i in range(k - 1):
                    myStack.pop()
            else:
                if len(myStack) != 0 and char == myStack[-1][0]:
                    count = myStack[-1][1] + 1
                else:
                    count = 1
                myStack.append([char, count])
            
        result = ""
        for char, count in myStack:
            result += char
        return result
