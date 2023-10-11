# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.equalCount = 0
    
    def helper(self, current: TreeNode) -> Tuple[int, int]:
        nodeCount = 1
        subTreeSum = current.val
        
        if current.left:
            leafSum, numChildren = self.helper(current.left)
            subTreeSum += leafSum
            nodeCount += numChildren
            
        if current.right:
            leafSum, numChildren = self.helper(current.right)
            subTreeSum += leafSum
            nodeCount += numChildren
            
        if subTreeSum // nodeCount == current.val:
            self.equalCount += 1
        
        return subTreeSum, nodeCount
        
    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
        self.helper(root)
        return self.equalCount