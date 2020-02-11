/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) return '0'
  const vals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let res = ''
  if (num < 0)
    num += Math.pow(2, 32)
  while (num > 0) {
    res = vals[num % 16] + res
    num = ~~(num / 16)
  }
  return res
};

console.log(toHex(0));
console.log(toHex(26));
console.log(toHex(-1));