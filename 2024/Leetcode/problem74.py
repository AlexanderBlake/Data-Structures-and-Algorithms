class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        low = 0
        high = len(matrix) * len(matrix[0]) - 1

        while low < high:
            mid = (low + high) // 2

            if matrix[mid // len(matrix[0])][mid % len(matrix[0])] < target:
                low = mid + 1
            elif matrix[mid // len(matrix[0])][mid % len(matrix[0])] > target:
                high = mid - 1
            else:
                return True

        return matrix[high // len(matrix[0])][high % len(matrix[0])] == target
