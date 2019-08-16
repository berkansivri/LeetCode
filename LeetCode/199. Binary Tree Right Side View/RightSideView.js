/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let map = new Map()
  const iter = (node, l) => {
    while (node) {
      if (!node) return
      if (!map.has(l)) map.set(l, [])
      map.get(l).push(node.val)
      iter(node.right, l + 1)
      iter(node.left, l + 1)
      return
    }
  }
  iter(root, 0)
  return Array.from(map.values()).map(arr => arr[0])
};

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(rightSideView(toBTree([1, 2, 3, 4])));