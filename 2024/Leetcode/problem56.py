class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        result = []

        intervals.sort()
        start, end = intervals[0]
        for i in range(1, len(intervals)):
            currStart, currEnd = intervals[i]

            if currStart <= end:
                end = max(currEnd, end)
            else:
                result.append([start, end])
                start = currStart
                end = currEnd
                
        return result + [[start, end]]