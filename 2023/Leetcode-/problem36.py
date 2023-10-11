class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        colSets = []

        for i in range(9):
            if i % 3 == 0:
                boxSets = [set(), set(), set()]
            rowSet = set()

            for j in range(9):
                if len(colSets) == j:
                    colSets.append(set())
                
                current = board[i][j]
                if current != ".": 
                    if current in rowSet or current in colSets[j] or current in boxSets[j // 3]:
                        return False
                    rowSet.add(current)
                    colSets[j].add(current)
                    boxSets[j // 3].add(current)

        return True