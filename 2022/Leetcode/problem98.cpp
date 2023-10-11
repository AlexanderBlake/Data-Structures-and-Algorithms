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
    int previous;
    bool previousSet;
    
public:
    Solution() {
        previousSet = false;
    }
    
    bool isValidBST(TreeNode* root) {
        if (root) {
            if (!isValidBST(root -> left)) {
                return false;
            }
            
            if (!previousSet) {
                previousSet = true;
                previous = root -> val;
            } else {
                if (root -> val <= previous) { 
                    return false;
                }
                previous = root -> val;
            }
            
            if (!isValidBST(root -> right)) {
                return false;
            }
        }
        
        return true;
    }
};