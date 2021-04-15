/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// iterative
var postorder = function (root) {
  const result = []
  const stack = [root]

  while (stack[0]) {
    root = stack.pop()
    result.push(root.val)

    for (const node of root.children) {
      stack.push(node)
    }
  }

  return result.reverse()
}

// recursive
var postorder = function (root) {
  const result = []

  const iter = node => {
    if (!node) return result

    for (const child of node.children) {
      iter(child)
    }

    result.push(node.val)
    return result
  }

  return iter(root)
}

function Node(val, children) {
  this.val = val
  this.children = children
}

const c = new Node(2, [])
const d = new Node(4, [])

const e = new Node(5, [])
const f = new Node(6, [])

const b = new Node(3, [e, f])

const a = new Node(1, [b, c, d])

console.log(postorder(a))
// Output: [5,6,3,2,4,1]
