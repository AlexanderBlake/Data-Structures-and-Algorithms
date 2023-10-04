# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getMiddle(self, head):
        fast = head
        slow = head
        while fast.next and fast.next.next:
            fast = fast.next.next
            slow = slow.next

        return slow.next


    def reverse(self, curr):
        if curr.next:
            prev, head = self.reverse(curr.next)
            prev.next = curr
            return curr, head
        return curr, curr


    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if not head.next:
            return True

        middle = self.getMiddle(head)
        curr, right = self.reverse(middle)
        curr.next = None

        while right.next:
            if head.val != right.val:
                return False
            head = head.next
            right = right.next
        return head.val == right.val
