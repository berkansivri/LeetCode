/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head

  let p = head
  while (p) {
    if (!p.child) {
      p = p.next
      continue
    }

    let temp = p.child
    while (temp.next) {
      temp = temp.next
    }

    temp.next = p.next
    if (p.next) p.next.prev = temp

    p.next = p.child
    p.child.prev = p
    p.child = null
  }

  return head
}

console.log(flatten([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12])) // [1,2,3,7,8,11,12,9,10,4,5,6]
console.log(flatten([1, 2, null, 3])) // [1,3,2]
console.log(flatten([])) // []
