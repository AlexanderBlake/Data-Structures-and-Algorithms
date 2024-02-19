# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        result = []
        queue = deque([(root, 0)])

        while len(queue) != 0:
            root, level = queue.popleft()
            if root.left:
                queue.append((root.left, level + 1))
            if root.right:
                queue.append((root.right, level + 1))

            if level == len(result):
                result.append((root.val, 1))
            else:
                mySum, count = result[level]
                result[level] = (mySum + root.val, count + 1)

        for i in range(len(result)):
            mySum, count = result[i]
            result[i] = mySum / count

        return result