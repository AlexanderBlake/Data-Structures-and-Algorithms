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
    bool isSameTree(TreeNode* p, TreeNode* q) {
        bool result = false;
        
        if (p && q && p -> val == q -> val) {
            result = isSameTree(p -> left, q -> left);

            if (result) {
                result = isSameTree(p -> right, q -> right);
            }
        }
        
        return result || (p == q);
    }
};