class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        '''
        # Approach 1: Brute Force
        # Time Complexity: O(n^2)
        # Space Complexity: O(1)
        for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True
        return False

        # Approach 2: Sort
        # Time Complexity: O(n log n)
        # Space Complexity: O(1)
        nums.sort()
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True
        return False
        '''

        # Approach 3a: HashSet
        # Time Complexity: O(n)
        # Space Complexity: O(n)
        return len(set(nums)) != len(nums)

        '''
        # Approach 3b: HashSet
        mySet = set()
        for val in nums:
            if val in mySet:
                return True
            mySet.add(val)

        return False
        '''