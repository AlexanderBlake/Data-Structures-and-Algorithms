class Solution:
    def distance(self, x1, y1, x2 = 0, y2 = 0):
        return sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)


    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        myHeap = []
        for point in points:
            myHeap.append((self.distance(point[0], point[1]), point))

        heapq.heapify(myHeap)
        result = [0] * k

        for i in range(k):
            dist, point = heapq.heappop(myHeap)
            result[i] = point

        return result