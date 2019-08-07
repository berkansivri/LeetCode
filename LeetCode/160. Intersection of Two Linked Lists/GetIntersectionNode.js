/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let a = headA, b = headB
  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }
  return a
};

console.log(getIntersectionNode(toBTree([4, 1, 8, 4, 5]), toBTree([5, 0, 1, 8, 4, 5])));

function toBTree(array, i = 0) {
  if (array[i] == null) return null
  const root = new ListNode(array[i])
  root.next = toBTree(array, i + 1)
  return root
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}