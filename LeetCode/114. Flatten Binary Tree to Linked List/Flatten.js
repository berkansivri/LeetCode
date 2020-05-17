/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let pre,
    cur = root
  while (cur) {
    if (!cur.left) cur = cur.right
    else {
      pre = cur.left
      while (pre.right) pre = pre.right

      pre.right = cur.right
      cur.right = cur.left
      cur.left = null
    }
  }
  console.log(root)
}

console.log(flatten(toBTree([1, 2, 5, 3, 4, null, 6])))

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
