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
function findSum(current, sumAtDepths, currentDepth = 1) {
    if (current) {
        
        if (sumAtDepths[currentDepth] !== undefined) {
            sumAtDepths[currentDepth] += current.val;
        } else {
            sumAtDepths[currentDepth] = current.val;
        }
        
        findSum(current.left, sumAtDepths, currentDepth + 1);
        findSum(current.right, sumAtDepths, currentDepth + 1);
    }
    
    return sumAtDepths;
}

var deepestLeavesSum = function(root) {
    let sumAtDepths = {};
    findSum(root, sumAtDepths);

    let deepestDepth = 0;
    let result;
    for (const currentDepth in sumAtDepths) {
        if (parseInt(currentDepth) > deepestDepth) {
            deepestDepth = currentDepth;
            result = sumAtDepths[currentDepth];
        }
    }
    
    return result;
};