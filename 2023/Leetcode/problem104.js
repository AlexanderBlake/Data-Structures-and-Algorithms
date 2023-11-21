/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // n: number of nodes
    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(n) Linear Space

    // Depth-First Search (DFS) w/recursion
    // Breadth-First Search (BFS) w/Queue
    if (!root) {
        return 0;
    }

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    if (left > right) {
        return left + 1;
    }
    return right + 1;
};