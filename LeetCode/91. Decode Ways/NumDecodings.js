/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let f = [...[1, s[0] === '0' ? 0 : 1]]

  for (let i = 1; i < s.length; i++) {
    f.push(0)
    if (s[i] !== '0') {
      f[i + 1] += f[i]
    }
    if (i === 0) continue
    let twoDigitNum = parseInt(s.substr(i - 1, 2), 10)
    if (twoDigitNum >= 10 && twoDigitNum <= 26) {
      f[i + 1] += f[i - 1]
    }
  }
  return f.pop()
}
console.log(numDecodings('2215'))

// 2 2 1 5
// 2 21 5
// 2 2 15
// 22 1 5
// 22 15
