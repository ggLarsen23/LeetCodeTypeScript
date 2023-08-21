function isBalanced(root) {
    let balancedFlag = true;
    function dfs(node) {
        if (node == null)
            return 0;
        let left = 0;
        let right = 0;
        if (node.left != null) {
            left = dfs(node.left);
        }
        if (node.right != null) {
            right = dfs(node.right);
        }
        if (left >= right + 2 || left <= right - 2) {
            balancedFlag = false;
        }
        return Math.max(left, right) + 1;
    }
    return balancedFlag;
}
//# sourceMappingURL=BalancedBinaryTree.js.map