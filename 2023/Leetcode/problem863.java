/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public static HashMap<Integer, ArrayList<Integer>> buildGraph(TreeNode root) {
        HashMap<Integer, ArrayList<Integer>> graph = new HashMap<Integer, ArrayList<Integer>>();
        ArrayDeque<TreeNode> queue = new ArrayDeque<TreeNode>();

        queue.add(root);
        graph.put(root.val, new ArrayList<Integer>());

        while (queue.size() != 0) {
            root = queue.pop();

            if (root.left != null) {
                graph.get(root.val).add(root.left.val);
                graph.put(root.left.val, new ArrayList<Integer>());
                graph.get(root.left.val).add(root.val);

                queue.add(root.left);
            }
            
            if (root.right != null) {
                graph.get(root.val).add(root.right.val);
                graph.put(root.right.val, new ArrayList<Integer>());
                graph.get(root.right.val).add(root.val);

                queue.add(root.right);
            }
        }
        return graph;
    }

    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        HashMap<Integer, ArrayList<Integer>> graph = buildGraph(root);

        HashSet<Integer> visited = new HashSet<Integer>();
        ArrayList<Integer> result = new ArrayList<Integer>();
        ArrayDeque<Integer> queue = new ArrayDeque<Integer>();

        int curr;
        int distance;

        queue.add(target.val);
        queue.add(0);
        visited.add(target.val);

        while (queue.size() != 0) {
            curr = queue.pop();
            distance = queue.pop();

            if (distance == k) {
                result.add(curr);
            } else {
                for (Integer val : graph.get(curr)) {
                    if (!visited.contains(val)) {
                        queue.add(val);
                        queue.add(distance + 1);
                        visited.add(val);
                    }
                }
            }
        }
        return result;
    }
}