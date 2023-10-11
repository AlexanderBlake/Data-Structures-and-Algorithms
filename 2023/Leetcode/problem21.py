# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1 or not list2:
            if list1:
                root = ListNode(list1.val, list1.next)
            elif list2:
                root = ListNode(list2.val, list2.next)
            else:
                return None
        
        elif list1.val < list2.val:
            root = ListNode(list1.val)
            root.next = self.mergeTwoLists(list1.next, list2)
        else:
            root = ListNode(list2.val)
            root.next = self.mergeTwoLists(list1, list2.next)
            
        return root