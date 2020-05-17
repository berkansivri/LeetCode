// %96

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
var removeNthFromEnd = function (head, n) {
  var arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  arr.splice(arr.length - n, 1)
  let result = null
  if (arr.length > 0) {
    var temp = new ListNode(arr[0])
    result = temp
    for (let i = 1; i < arr.length; i++) {
      temp.next = new ListNode(arr[i])
      temp = temp.next
    }
  }
  return result
}
