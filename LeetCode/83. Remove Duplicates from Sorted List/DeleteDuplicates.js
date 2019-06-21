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
var deleteDuplicates = function (head) {
  let orj = head
  while (head && head.next) {
    if (head.val === head.next.val) head.next = head.next.next;
    else head = head.next
  }
  return orj
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function convertToArray(ln) {
  const arr = [];
  while (ln && ln.val != undefined) {
    arr.push(ln.val);
    ln = ln.next;
  }
  return arr;
};

function toList(array) {
  const head = new ListNode();
  let node = head;
  for (let a of array) {
    node.next = new ListNode(a);
    node = node.next;
  }
  return head.next;
}

console.log(deleteDuplicates(toList([1, 1, 2, 3, 3])));