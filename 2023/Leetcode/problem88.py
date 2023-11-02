class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        index1 = m - 1
        index2 = n - 1
        mergeIndex = m + n - 1
        
        while index1 >= 0 and index2 >= 0:
            if nums1[index1] > nums2[index2]:
                nums1[mergeIndex] = nums1[index1]
                index1 -= 1
            else:
                nums1[mergeIndex] = nums2[index2]
                index2 -= 1

            mergeIndex -= 1

        while index2 >= 0:
            nums1[mergeIndex] = nums2[index2]
            index2 -= 1
            mergeIndex -= 1