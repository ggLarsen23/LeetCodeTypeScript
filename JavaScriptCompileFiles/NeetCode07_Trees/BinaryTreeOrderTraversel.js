/* 102. Binary Tree Level Order Traversal O(n) time */
function levelOrder(root) {
    if (root == null)
        return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const tmpResult = [];
        const qLength = queue.length;
        for (let i = 0; i < qLength; i++) {
            let node = queue.shift();
            tmpResult.push(node.val);
            if (node.left != null)
                queue.push(node.left);
            if (node.right != null)
                queue.push(node.right);
        }
        result.push(tmpResult);
    }
    return result;
}
/* Traverse binary tree breath first search in a non recursive fashion.*/
function functionBreatFirstSearch(root) {
    if (root == null)
        return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
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
//# sourceMappingURL=BinaryTreeOrderTraversel.js.map