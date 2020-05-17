/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  var result = Array(num1.length + num2.length).fill(0)

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      var temp = num1[i] * num2[j] + result[i + j + 1]
      result[i + j + 1] = temp % 10
      result[i + j] += Math.trunc(temp / 10)
    }
  }

  while (result.length > 1 && result[0] === 0) result.shift()
  return result.join('')
}
