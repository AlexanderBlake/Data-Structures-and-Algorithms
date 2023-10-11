class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        mySet = set()
        result = []

        for num in nums:
            if num in mySet:
                result.append(num)
            else:
                mySet.add(num)
        
        return result