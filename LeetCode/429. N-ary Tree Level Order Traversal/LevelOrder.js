/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  BFS(root, 0)
  return res

  function BFS(node, depth) {
    if (!node) return
    if (depth === res.length) {
      res.push([])
    }
    res[depth].push(node.val)
    for (child of node.children) {
      BFS(child, depth + 1)
    }
  }
}
