# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inOrder(self, curr, k):
        if not curr:
            return k, 0

        k, newVal = self.inOrder(curr.left, k)
        if k == 0:
            return k, newVal
        
        k -= 1
        if k == 0:
            return k, curr.val
    
        return self.inOrder(curr.right, k)

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int: 
        k, val = self.inOrder(root, k)
        return val