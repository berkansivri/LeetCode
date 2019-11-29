/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return Number.parseInt(Math.sqrt(n))
};

var bulbSwitch2 = function (n) {
  let arr = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j += i + 1) {
      arr[j] = !arr[j]
    }
  }
  return arr.filter(x => x).length
};

console.log(bulbSwitch(3));
console.log(bulbSwitch(4));
console.log(bulbSwitch(9));