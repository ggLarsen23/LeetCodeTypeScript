/* 543. Diameter of Binary Tree */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let longestPath = 0;

    function dfs(node: TreeNode | null): number {
        if (node == null) return 0;
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


