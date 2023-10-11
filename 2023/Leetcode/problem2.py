# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def _addTwoNumsHelper(self, l1: Optional[ListNode], l2: Optional[ListNode], carry: int = 0) -> Optional[ListNode]:
        if not l1 and not l2 and carry == 0:
            return None

        result = carry
        if l1:
            result += l1.val
            l1 = l1.next
        if l2:
            result += l2.val
            l2 = l2.next

        current = ListNode(result % 10)

        current.next = self._addTwoNumsHelper(l1, l2, result // 10)
        return current

    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        return self._addTwoNumsHelper(l1, l2)