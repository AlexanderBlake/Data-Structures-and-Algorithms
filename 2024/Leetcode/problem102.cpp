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
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> result;

        if (!root) {
            return result;
        }

        queue<size_t> levels;
        queue<TreeNode*> myQueue;
        
        myQueue.push(root);
        levels.push(0);

        while (!myQueue.empty()) {
            TreeNode* currNode = myQueue.front();
            auto currLevel = levels.front();

            myQueue.pop();
            levels.pop();

            if (result.size() == currLevel) {
                result.push_back(vector<int>());
            }
            result[currLevel].push_back(currNode -> val);

            if (currNode -> left) {
                myQueue.push(currNode -> left);
                levels.push(currLevel + 1);
            }

            if (currNode -> right) {
                myQueue.push(currNode -> right);
                levels.push(currLevel + 1);
            }
        }

        return result;
    }
};