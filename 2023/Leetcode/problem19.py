# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head.next:
            return None

        fast = head
        for i in range(n):
            fast = fast.next

        if not fast:
            head = head.next
        else:
            slow = head
            while fast.next:
                slow = slow.next
                fast = fast.next

            slow.next = slow.next.next

        return head
