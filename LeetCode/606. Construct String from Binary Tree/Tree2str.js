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
 * @return {string}
 */
var tree2str = function (root) {
  let str = ''
  const iter = node => {
    if (!node) return
    str += node.val
    if (node.left || node.right) {
      if (node.left) {
        str += '('
        iter(node.left)
        str += ')'
      } else str += '()'

      if (node.right) {
        str += '('
        iter(node.right)
        str += ')'
      }
    }
  }
  iter(root)
  str = str.replace('())', '')
  return str
}

console.log(tree2str(toBTree([1, 2, 3, 4]))) // 1(2(4)())(3()()) -> 1(2(4))(3)
console.log(tree2str(toBTree([1, 2, 3, null, 4]))) // 1(2()(4))(3)
