const { toBTree } = require('./utils')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0

  const dfs = node => {
    if (!node) return
    dfs(node.right)
    node.val += sum
    sum = node.val
    dfs(node.left)
  }

  dfs(root)
  return root
}

console.log(convertBST(toBTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])))
// [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

console.log(convertBST(toBTree([0, null, 1])))
// [1,null,1]

console.log(convertBST(toBTree([1, 0, 2])))
// [3,3,2]

console.log(convertBST(toBTree([3, 2, 4, 1])))
// [7,9,4,10]
