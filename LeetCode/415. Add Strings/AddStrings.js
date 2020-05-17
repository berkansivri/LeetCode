/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = ''
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0
  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    let n1 = i < 0 ? 0 : +num1[i]
    let n2 = j < 0 ? 0 : +num2[j]
    const sum = n1 + n2 + carry
    res = (sum % 10).toString() + res
    carry = ~~(sum / 10)
  }
  return res
}

console.log(addStrings('9', '99'))
console.log(addStrings('0', '0'))
