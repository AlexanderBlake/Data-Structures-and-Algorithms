class UnionFind:
        def __init__(self, size: int):
            self.myList = [i for i in range(size)]


        def add(self, label1: int, label2: int):
            self.myList[self.find(label1)] = self.myList[self.find(label2)]


        def find(self, label: int) -> int:
            parent = label
            compressionList = []
            
            while self.myList[parent] != parent:
                compressionList.append(parent)
                parent = self.myList[parent]

            if len(compressionList) > 1:
                for val in compressionList[:-1]:
                    self.myList[val] = parent
    
            return parent


class Solution:
    def manhattanDist(self, point1: List[int], point2: List[int]) -> int:
        return abs(point1[0] - point2[0]) + abs(point1[1] - point2[1])


    def buildEdgeList(self, points: List[List[int]]):
        edges = []
        for i in range(len(points)):
            for j in range(i + 1, len(points)):
                edges.append((self.manhattanDist(points[i], points[j]), i, j))

        return edges


    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        edges = self.buildEdgeList(points)
        edges.sort()

        result = 0
        myUnionFind = UnionFind(len(points))

        for edge, point1, point2 in edges:
            if myUnionFind.find(point1) != myUnionFind.find(point2):
                result += edge
                myUnionFind.add(point1, point2)

        return result
