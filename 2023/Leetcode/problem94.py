# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        result = []
        stack = [root]
        visited = set([])

        while root:
            if root.left and root.left not in visited:
                root = root.left
                stack.append(root)

            elif root not in visited:
                result.append(root.val)
                visited.add(root)
                
            elif root.right:
                root = root.right
                stack.append(root)

            elif len(stack) == 0:
                root = None

            else:
                root = stack.pop()

        return result