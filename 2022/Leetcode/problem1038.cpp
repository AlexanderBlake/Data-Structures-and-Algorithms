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
    int bstToGstHelper(TreeNode* root, int sum = 0) {
        if (root) {
            sum = bstToGstHelper(root -> right, sum);
            sum += root -> val;
            root -> val = sum;
            sum = bstToGstHelper(root -> left, sum);
        }
        return sum;
    }
    
    TreeNode* bstToGst(TreeNode* root) {
        bstToGstHelper(root);
        return root;
    }
};