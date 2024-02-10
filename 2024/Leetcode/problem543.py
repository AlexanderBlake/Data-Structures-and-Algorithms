# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfsTraversal(self, curr, highest = 0):
        if not curr:
            return -1, -1, highest
        leftD, leftH, highest = self.dfsTraversal(curr.left, highest)
        rightD, rightH, highest = self.dfsTraversal(curr.right, highest)

        if leftH + rightH + 2 > highest:
            highest = leftH + rightH + 2

        return leftH + rightH + 2, max(leftH, rightH) + 1, highest

    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter, height, highest = self.dfsTraversal(root)
        return highest
