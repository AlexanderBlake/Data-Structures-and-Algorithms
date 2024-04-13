class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        myStack = []
        operators = {'+': lambda x, y: x + y, '-': lambda x, y: x - y, '*': lambda x, y: x * y, '/': lambda x, y: int(x / y)}

        for token in tokens:
            if token not in operators:
                myStack.append(int(token))
            else:
                rVal = myStack.pop()
                myStack.append(operators[token](myStack.pop(), rVal))

        return myStack[-1]