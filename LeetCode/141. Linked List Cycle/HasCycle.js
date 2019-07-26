/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let a = b = head
  while (b && b.next) {
    a = a.next
    b = b.next.next
    if (a === b) return true
  }
  return false
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a = new ListNode(3)
a.next = new ListNode(2)
a.next.next = new ListNode(0)
a.next.next.next = new ListNode(-4)
console.log(hasCycle(a));