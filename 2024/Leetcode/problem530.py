# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfsTraversal(self, root, values):
        if root:
            self.dfsTraversal(root.left, values)
            values.append(root.val)
            self.dfsTraversal(root.right, values)

    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        values = []
        self.dfsTraversal(root, values)

        minDiff = values[1] - values[0]
        for i in range(2, len(values)):
            minDiff = min(minDiff, values[i] - values[i - 1])
        
        return minDiff
