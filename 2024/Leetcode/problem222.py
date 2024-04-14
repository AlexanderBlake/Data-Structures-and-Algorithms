# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getHeights(self, root):
        leftHeight = 1
        curr = root
        while curr.left:
            curr = curr.left
            leftHeight += 1

        rightHeight = 1
        while root.right:
            root = root.right
            rightHeight += 1

        return leftHeight, rightHeight


    def countNodes(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        leftHeight, rightHeight = self.getHeights(root)
        if leftHeight == rightHeight:
            return 2 ** leftHeight - 1
        
        return self.countNodes(root.left) + self.countNodes(root.right) + 1