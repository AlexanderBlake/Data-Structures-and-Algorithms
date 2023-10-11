class Solution:
    def recursiveGeneration(self, current: str, openingCount: int, offset: int) -> List[str]:
        result = []
        if openingCount > 0:
            generations = self.recursiveGeneration(current + '(', openingCount - 1, offset + 1)
            for generation in generations:
                result.append(generation)

            if offset > 0:
                generations = self.recursiveGeneration(current + ')', openingCount, offset - 1)
                for generation in generations:
                    result.append(generation)

        else:
            return [current + ')' * offset]

        return result

    def generateParenthesis(self, n: int) -> List[str]:
        return self.recursiveGeneration('(', n - 1, 1)