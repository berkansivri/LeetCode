/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) { 
  let res = []
  for (let i = 0; i < numRows; i++) {
    res[i] = []
    for (let j = 0; j <= i; j++) {
      res[i][j] = res[i-1] ? (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0) : 1
    }
  }
  return res
}

console.log(generate(0))
console.log(generate(5))
console.log(generate(6))