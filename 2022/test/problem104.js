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
    return helper(root);
};

var helper = function(currentNode, currentDepth = 0, deepestDepth = 0) {    
    if (currentNode) {        
        if (++currentDepth > deepestDepth) {
            deepestDepth = currentDepth;
        }
        
        let result = helper(currentNode.left, currentDepth, deepestDepth);
        
        if (result > deepestDepth) {
            deepestDepth = result;
        }
        
        result = helper(currentNode.right, currentDepth, deepestDepth);
        
        if (result > deepestDepth) {
            deepestDepth = result;
        }
    }
    
    return deepestDepth;
}