/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  const result = []
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      let count = h ? h.toString(2).match(/1/g).length : 0
      count += m ? m.toString(2).match(/1/g).length : 0

      if (count === num) {
        result.push(`${h}:${m < 10 ? '0' + m : m}`)
      }
    }
  }
  return result
}

console.log(readBinaryWatch(1))
console.log(readBinaryWatch(2))
console.log(readBinaryWatch(3))
console.log(readBinaryWatch(4))
console.log(readBinaryWatch(5))
