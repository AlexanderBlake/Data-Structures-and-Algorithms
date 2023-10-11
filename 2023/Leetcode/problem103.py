# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        level = 0
        result = [[]]
        zigzag = False
        stackDict = {0: deque([root]), 1: deque()}

        while len(stackDict[level]) != 0:
            root = stackDict[level].pop()

            if root:
                if level == len(result):
                    result.append([])
                result[level].append(root.val)

                if zigzag:
                    stackDict[level + 1].append(root.right)
                    stackDict[level + 1].append(root.left)
                    
                else:
                    stackDict[level + 1].append(root.left)
                    stackDict[level + 1].append(root.right)

            if len(stackDict[level]) == 0:
                level += 1
                zigzag = not zigzag
                stackDict[level + 1] = deque()

        return result