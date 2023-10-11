/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int findDeepestDepth(TreeNode* current, int deepestDepth = 1, int currentDepth = 1) {
        if (deepestDepth < currentDepth) {
            deepestDepth = currentDepth;
        }
        
        if (current -> left) {
            deepestDepth = findDeepestDepth(current -> left, deepestDepth, currentDepth + 1);
        }
        
        if (current -> right) {
            deepestDepth = findDeepestDepth(current -> right, deepestDepth, currentDepth + 1);
        }
        
        return deepestDepth;
    }
    
    int findSum(TreeNode* current, int deepestDepth, int currentDepth = 1, int sum = 0) {
        if (current) {
            if (deepestDepth == currentDepth) {
                sum += current -> val;
            } else { 
                sum = findSum(current -> left, deepestDepth, currentDepth + 1, sum);
                sum = findSum(current -> right, deepestDepth, currentDepth + 1, sum);
            }
        }
        
        return sum;
    }
    
    int deepestLeavesSum(TreeNode* root) {
        int deepestDepth = findDeepestDepth(root);
        
        return findSum(root, deepestDepth);
    }
};