/* 110. Balanced Binary Tree, O(n) in time and space */
function isBalanced(root: TreeNode | null): boolean {
    let balancedFlag = true;
    dfs(root);

    function dfs(node: TreeNode | null): number {
        if (node == null) return 0;

        let left = 0;
        let right = 0;
        if (node.left != null) {
            left = dfs(node.left);
        }
        if (node.right != null) {
            right = dfs(node.right);
        }

        if (Math.abs(left - right) > 1) {
            balancedFlag = false;
        }
        return Math.max(left, right) + 1;
    }
    return balancedFlag;
}
