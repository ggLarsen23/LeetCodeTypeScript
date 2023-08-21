/* 199. Binary Tree Right Side View, same as getting binaryTree Levels. Just return last digit. */
function rightSideView(root) {
    if (root == null)
        return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const levelVal = [];
        const qLength = queue.length;
        for (let i = 0; i < qLength; i++) {
            let node = queue.shift();
            levelVal.push(node.val);
            if (node.left != null)
                queue.push(node.left);
            if (node.right != null)
                queue.push(node.right);
        }
        result.push(levelVal[levelVal.length - 1]);
    }
    return result;
}
//# sourceMappingURL=BinaryTreeRightSideView.js.map