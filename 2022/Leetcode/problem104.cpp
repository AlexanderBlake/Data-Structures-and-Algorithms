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
    int deepestDepth = 0;
    
public:
    void findDepth(TreeNode* current, int currentDepth = 1) {
        if (current) {
            if (deepestDepth < currentDepth) {
                deepestDepth = currentDepth;
            }
            
            findDepth(current -> left, currentDepth + 1);
            findDepth(current -> right, currentDepth + 1);
        }
    }
    
    int maxDepth(TreeNode* root) {
        findDepth(root);
        return deepestDepth;
    }
};