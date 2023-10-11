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
private:
    int isBalancedHelper(TreeNode* current, int height = 0) {        
        if (current) {
            int leftHeight = isBalancedHelper(current -> left, height + 1);
            int rightHeight = isBalancedHelper(current -> right, height + 1);
            
            if (abs(leftHeight - rightHeight) > 1) {
                return -1;
            } else if (leftHeight > rightHeight) {
                return leftHeight;
            } else {
                return rightHeight;
            }
        }
        
        return height;
    }
public:    
    bool isBalanced(TreeNode* root) {
        return isBalancedHelper(root) != -1;
    }
};