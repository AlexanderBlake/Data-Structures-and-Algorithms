public class Solution {
    // n = Length of nums
    // Time Complexity: n = O(n) Linear Time
    // Space Complexity: n / 2 = O(n) Linear Space
    public int SingleNumber(int[] nums) {
        var numsList = new HashSet<int>();

        for (int i = 0; i < nums.Length; i++) // O(n)
        {
            if (!(numsList.Contains(nums[i])))  // O(1)
            {
                numsList.Add(nums[i]); // O(1)
            }
            else
            {
                numsList.Remove(nums[i]); // O(1)
            }
        }

        foreach (int num in numsList)
        {
            return num;
        }
        
        return 0;
    }
}