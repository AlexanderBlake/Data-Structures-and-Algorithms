# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        n = 0
        sumDict = {}

        while head:
            sumDict[n] = head.val
            head = head.next
            n += 1

        highestVal = sumDict[0] + sumDict[n - 1]
        for i in range(1, n // 2):
            sumDict[i] += sumDict[n - 1 - i]
            if sumDict[i] > highestVal:
                highestVal = sumDict[i]

        return highestVal