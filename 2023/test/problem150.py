class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if len(tokens) == 1:
            return int(tokens[0])

        operators = set(['+', '-', '*', '/'])
        stack = [int(tokens[0]), int(tokens[1])]

        for i in range(2, len(tokens)):
            if tokens[i] in operators:
                right = stack.pop()
                left = stack.pop()

                if tokens[i] == '+':
                    stack.append(left + right)
                if tokens[i] == '-':
                    stack.append(left - right)
                if tokens[i] == '*':
                    stack.append(left * right)
                if tokens[i] == '/':
                    stack.append(int(left / right))

            else:
                stack.append(int(tokens[i]))

        return stack[0]