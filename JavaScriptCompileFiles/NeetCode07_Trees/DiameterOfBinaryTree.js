/* 543. Diameter of Binary Tree */
function diameterOfBinaryTree(root) {
    let longestPath = 0;
    function dfs(node) {
        if (node == null)
            return 0;
        else {
            const left = dfs(node.left);
            const right = dfs(node.right);
            if (left + right > longestPath) {
                longestPath = left + right;
            }
            return Math.max(left, right) + 1;
        }
    }
    dfs(root);
    return longestPath;
}
//# sourceMappingURL=DiameterOfBinaryTree.js.map