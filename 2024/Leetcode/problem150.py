class Solution:
    def add(self, lVal, rVal):
        return lVal + rVal


    def subtract(self, lVal, rVal):
        return lVal - rVal


    def multiply(self, lVal, rVal):
        return lVal * rVal


    def divide(self, lVal, rVal):
        return int(lVal / rVal)


    def evalRPN(self, tokens: List[str]) -> int:
        myStack = []
        operators = {'+': self.add, '-': self.subtract, '*': self.multiply, '/': self.divide}

        for token in tokens:
            if token not in operators:
                myStack.append(int(token))
            else:
                rVal = myStack.pop()
                myStack.append(operators[token](myStack.pop(), rVal))

        return myStack[-1]
            