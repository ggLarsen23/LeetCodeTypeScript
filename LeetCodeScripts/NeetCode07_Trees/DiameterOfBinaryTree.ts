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

/* Traverse binary tree breath first search in a non recursive fashion.*/
function functionBreatFirstSearch(root: TreeNode | null): number[] {
    if (root == null) return [];
    const result: number[] = [];
    const queue = [root];

    while (queue.length > 0) {
        const current: TreeNode = queue.shift();
        result.push(current.val);
        if (current.left != null) {
            queue.push(current.left);
        }
        if (current.right != null) {
            queue.push(current.right);
        }
    }

    return result;
}
