/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let a = b = head
  while (b && b.next) {
    a = a.next
    b = b.next.next
    if (a === b) {
      let c = head
      while (c != a) {
        c = c.next
        a = a.next
      }
      return c
    }
  }
  return null
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a = new ListNode(3)
a.next = new ListNode(2)
a.next.next = new ListNode(0)
a.next.next.next = new ListNode(-4)
console.log(detectCycle(a));