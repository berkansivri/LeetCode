/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const arr = [0]
  for (let i = 1; i <= num; i++) {
    arr.push(i.toString(2).match(/1/g).length)
  }
  return arr
}

var countBits2 = function (num) {
  let calArr = []
  const calOne = i => {
    let res = 0
    if (i === 0) return res
    while (i) {
      res += i % 2
      i = Math.floor(i / 2)
    }
    return res
  }
  for (let i = 0; i <= num; i++) {
    calArr.push(calOne(i))
  }
  return calArr
}

console.log(countBits(2))
console.log(countBits2(5))
