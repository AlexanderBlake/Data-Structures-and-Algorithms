class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        heap = []
        locationDict = {}

        for num in nums:
            if num not in locationDict:
                locationDict[num] = len(heap)
                heap.append((-1, num))
            else:
                count, num = heap[locationDict[num]]
                heap[locationDict[num]] = count - 1, num

        result = []
        heapq.heapify(heap)
        for i in range(k):
            count, num = heapq.heappop(heap)
            result.append(num)

        return result