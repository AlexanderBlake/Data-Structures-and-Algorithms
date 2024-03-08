class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        answer = []
        specialNums = {3: "Fizz", 5: "Buzz"}

        for num in range(1, n + 1):
            curr = ""
            for val in specialNums:
                if num % val == 0:
                    curr += specialNums[val]

            if curr == "":
                curr = str(num)
            answer.append(curr)

        return answer