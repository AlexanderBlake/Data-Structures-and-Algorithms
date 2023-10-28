"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if root:
            queue = deque([(root, 0)])

            while len(queue) != 0:
                node, level = queue.popleft()

                if node.left:
                    queue.append((node.left, level + 1))
                if node.right:
                    queue.append((node.right, level + 1))

                if len(queue) != 0:
                    peekNode, peekLevel = queue.popleft()
                    if peekLevel == level:
                        node.next = peekNode
                    queue.appendleft((peekNode, peekLevel))

        return root