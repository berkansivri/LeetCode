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
var insertionSortList = function (head) {
  if (!head) return null
  let node = head.next, arr = [head]
  while (node) {
    let minIndex = -1
    for (let i = arr.length - 1; i >= 0; i--) {
      if (node.val < arr[i].val)
        minIndex = i
      else
        break
    }
    if (minIndex !== -1)
      arr.splice(minIndex, 0, node)
    else
      arr.push(node)
    node = node.next
  }
  node = head
  while (arr.length) {
    node.next = Object.assign({}, arr.shift())
    node = node.next
  }
  node.next = null
  return head.next
};

let p = new ListNode(4)
p.next = new ListNode(2)
p.next.next = new ListNode(1)
p.next.next.next = new ListNode(3)

console.log(insertionSortList(p));

function ListNode(val) {
  this.val = val;
  this.next = null;
}