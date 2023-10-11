# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from queue import Queue

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        result = [[]]
        queue = Queue()
        queue.put(root)
        currentDepth = 0
        depths = {root: 0}
        
        while not queue.empty():
            root = queue.get()

            if root:
                if depths[root] != currentDepth:
                    result.append([])
                    currentDepth = depths[root]

                result[-1].append(root.val)
                    
                queue.put(root.left)
                depths[root.left] = currentDepth + 1

                queue.put(root.right)
                depths[root.right] = currentDepth + 1

        return result