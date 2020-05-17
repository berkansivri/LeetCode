/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (a1, a2) {
  var t1 = '',
    t2 = ''
  while (a1) {
    t1 += a1.val.toString()
    a1 = a1.next
  }
  while (a2) {
    t2 += a2.val.toString()
    a2 = a2.next
  }

  var maxLength = t1.length > t2.length ? t1.length : t2.length
  for (let i = 0; i < maxLength; i++) {
    !t1[i] ? (t1 = t1 + '0') : !t2[i] ? (t2 = t2 + '0') : ''
  }

  var totalArr = []
  t1 = t1.split('').reverse().join('')
  t2 = t2.split('').reverse().join('')

  var borrow = 0
  for (let i = maxLength - 1; i >= 0; i--) {
    var total = Number(t1[i]) + Number(t2[i])
    if (borrow > 0) {
      totalArr.push((total + borrow) % 10)
      borrow--
      if (Math.floor((total + borrow + 1) / 10) > 0) {
        borrow++
      }
    } else {
      totalArr.push(total % 10)
      if (Math.floor(total / 10) > 0) {
        borrow++
      }
    }
  }
  if (borrow > 0) {
    totalArr.push(borrow)
  }
  var result = new ListNode(Number(totalArr[0]))
  var temp = result

  for (let i = 1; i < totalArr.length; i++) {
    temp.next = new ListNode(Number(totalArr[i]))
    temp = temp.next
  }
  return result
}
