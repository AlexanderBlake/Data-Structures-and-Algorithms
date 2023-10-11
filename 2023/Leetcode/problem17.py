class Solution:
    def buildNumLettersDict(self):
        offset = 0
        numLettersDict = {}
        baseLetters = "abc"

        for key in range(2, 10):
            currentLetters = ""
            for j in range(len(baseLetters)):
                currentLetters += chr(ord(baseLetters[j]) + offset)

            if key != 7 and key != 9:
                numLettersDict[key] = currentLetters
            else:
                numLettersDict[key] = currentLetters + chr(ord(currentLetters[-1]) + 1)
                offset += 1

            offset += 3

        return numLettersDict


    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "":
            return []
        
        numLettersDict = self.buildNumLettersDict()
        result = list(numLettersDict[int(digits[0])])

        for i in range(1, len(digits)):
            newResult = []
            for combination in result:
                for char in numLettersDict[int(digits[i])]:
                    newResult.append(combination + char)

            result = newResult

        return result