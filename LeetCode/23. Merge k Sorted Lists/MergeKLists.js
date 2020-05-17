/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  var arr = []
  for (let i = 0; i < lists.length; i++) {
    arr.push(...convertToArray(lists[i]))
  }
  arr.sort((a, b) => a - b)

  var temp = new ListNode()
  var result = temp
  for (let i = 0; i < arr.length; i++) {
    temp.next = new ListNode(arr[i])
    temp = temp.next
  }
  return result.next
}

var convertToArray = function (ln) {
  var arr = []
  while (ln && ln.val != undefined) {
    arr.push(ln.val)
    ln = ln.next
  }
  return arr
}
