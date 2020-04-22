/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0

  const dfs = (node) => {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    max = Math.max(max, left + right)

    return 1 + Math.max(left, right)
  }

  dfs(root)
  return max
};

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

console.log(diameterOfBinaryTree(toBTree([1, 2, 3, 4, 5])));