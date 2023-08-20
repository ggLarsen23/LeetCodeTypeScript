/* 104. Maximum Depth of Binary Tree*/
function maxDepth(root: TreeNode | null): number {
    if (root != null) {
        return 0;
    } else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);

        return Math.max(left, right) + 1;
    }
}

/* Traverse binary tree in a non recursive fashion.*/
function functionMaxDepthNonRecursive(root: TreeNode | null): number[] {
    if (root == null) return [];

    const result = [];
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);

        if (current.left != null) {
            stack.push(current.left);
        }
        if (current.right != null) {
            stack.push(current.right);
        }
    }
    return result;
}

/* Using a spread operator, and an arrow operator */
const depthFirstValues = (root: TreeNode) => {
    if(root == null) {return []}
    const leftValues: number[] = depthFirstValues(root.left);
    const rightValues: number[] = depthFirstValues(root.right);
    return [root.val, ...leftValues, ...rightValues];
}
