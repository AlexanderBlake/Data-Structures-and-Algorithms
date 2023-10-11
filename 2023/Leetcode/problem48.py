class Solution:
    def __helper(self, matrix: List[List[int]], start: int, length: int) -> None:
        if length < 2:
            return

        temp = matrix[start][start:start + length - 1]
        
        for i in range(length - 1):
            matrix[start][start + i] = matrix[start + length - i - 1][start]

        for i in range(length - 1):
            matrix[start + length - 1 - i][start] = matrix[start + length - 1][start + length - 1 - i]

        for i in range(length - 1):
            matrix[start + length - 1][start + length - 1 - i] = matrix[start + i][start + length - 1]
    
        for i in range(length - 1):
            matrix[start + i][start + length - 1] = temp[i]

        self.__helper(matrix, start + 1, length - 2)

    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        self.__helper(matrix, 0, len(matrix))