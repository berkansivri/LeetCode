/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack.slice(-1) > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
  }
  while (k-- > 0) stack.pop()

  let res = stack.join('')
  while (res.length && res[0] === '0') res = res.substr(1)
  return res || '0'
}

console.log(removeKdigits('10', 1))
console.log(removeKdigits('1432219', 3))
console.log(removeKdigits('10200', 1))
console.log(removeKdigits('10', 2))
