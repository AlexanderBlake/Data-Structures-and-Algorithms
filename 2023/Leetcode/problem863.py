# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildGraph(self, root):
        graph = {root.val: []}
        queue = deque([root])

        while len(queue) != 0:
            root = queue.popleft()

            if root.left:
                graph[root.val].append(root.left.val)
                graph[root.left.val] = [root.val]
                queue.append(root.left)

            if root.right:
                graph[root.val].append(root.right.val)
                graph[root.right.val] = [root.val]
                queue.append(root.right)

        return graph


    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        graph = self.buildGraph(root)

        result = []
        queue = deque([(target.val, 0)])
        visited = set()
        dist = 0

        while len(queue) != 0:
            curr, dist = queue.popleft()
            visited.add(curr)

            if dist == k:
                result.append(curr)
            else:
                for val in graph[curr]:
                    if val not in visited:
                        queue.append((val, dist + 1))

        return result
