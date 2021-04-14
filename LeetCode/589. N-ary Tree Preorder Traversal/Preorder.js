/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// recursive
var preorder = function (root) {
  const result = []

  const dfs = node => {
    if (!node) return result
    result.push(node.val)
    for (const child of node.children) {
      dfs(child)
    }
    return result
  }

  return dfs(root)
}

// iterative
var preorder = function (root) {
  const result = []
  const stack = [root]

  while (stack[0]) {
    const node = stack.pop()
    result.push(node.val)
    stack.push(...node.children.reverse())
  }

  return result
}

console.log(preorder([1, null, 3, 2, 4, null, 5, 6]))
// Output: [1,3,5,6,2,4]
console.log(
  preorder([
    1,
    null,
    2,
    3,
    4,
    5,
    null,
    null,
    6,
    7,
    null,
    8,
    null,
    9,
    10,
    null,
    null,
    11,
    null,
    12,
    null,
    13,
    null,
    null,
    14
  ])
)
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
