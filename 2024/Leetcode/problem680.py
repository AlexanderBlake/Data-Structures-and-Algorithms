class Solution:
    def isValid(self, s: str):
        front = 0
        back = len(s) - 1

        while s[front] == s[back] and front < back:
            front += 1
            back -= 1

        return front, back


    def validPalindrome(self, s: str) -> bool:
        front, back = self.isValid(s)
        if front >= back:
            return True
        
        front2, back2 = self.isValid(s[front + 1:back + 1])
        if front2 >= back2:
            return True

        front, back = self.isValid(s[front:back])
        return front >= back