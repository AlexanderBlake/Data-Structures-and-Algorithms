class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result(2);
        unordered_map<int, int> goalIndexMap;
        
        for (int i = 0; i < nums.size(); i++) {
            if (goalIndexMap.find(nums[i]) == goalIndexMap.end()) {
                goalIndexMap[target - nums[i]] = i;
            } else {
                result[0] = i;
                result[1] = goalIndexMap[nums[i]];
                break;
            }
        }
        return result;
    }
};