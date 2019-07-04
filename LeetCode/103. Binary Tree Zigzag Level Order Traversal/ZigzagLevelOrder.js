/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let map = {},
    level = 0
  if (root) map[level] = [root.val]
  else return []
  const iter = (l, r) => {
    level++
    if (!map[level]) map[level] = []
    if (level % 2 !== 0) map[level].unshift(r ? r.val : null, l ? l.val : null)
    else map[level].push(l ? l.val : null, r ? r.val : null)

    if (l) iter(l.left, l.right)
    if (r) iter(r.left, r.right)
    level--
  }
  iter(root.left, root.right)

  return Object.values(map)
      .map(x => x.filter(y => y !== null))
      .filter(z => z.length)
}

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

console.log(zigzagLevelOrder(toBTree([3, 9, 20, null, null, 15, 7])))
console.log(
  zigzagLevelOrder(toBTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]))
)
