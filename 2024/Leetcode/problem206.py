# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        back = head
        current = head.next
        front = current.next

        back.next = None

        while front:
            current.next = back

            back = current
            current = front
            front = front.next

        current.next = back
        return current