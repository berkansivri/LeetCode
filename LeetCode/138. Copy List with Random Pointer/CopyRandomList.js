/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let map = new Map(), node = head
  while (node) {
    map.set(node, new Node(node.val))
    node = node.next
  }
  node = head
  while (node) {
    if (node.next) map.get(node).next = map.get(node.next)
    if (node.random) map.get(node).random = map.get(node.random)
    node = node.next
  }
  return map.get(head)
};

let a = new Node(1)
a.next = new Node(2)
a.next.random = new Node(2)
a.random = new Node(3)
console.log(copyRandomList(a));


function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};