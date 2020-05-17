/**
 * @param {number} num
 * @return {boolean}
 */
var nthUglyNumber = function (n) {
  const cache = [1]
  let i = [0, 0, 0],
    arr = []
  while (!cache[n - 1]) {
    arr = [cache[i[0]] * 2, cache[i[1]] * 3, cache[i[2]] * 5]
    let min = Math.min(...arr)
    cache.push(min)
    arr.forEach((num, index) => num === min && i[index]++)
  }
  return cache[n - 1]
}

console.log(nthUglyNumber(10))
console.log(nthUglyNumber(1352))
console.log(nthUglyNumber(15))
console.log(nthUglyNumber(25))
console.log(nthUglyNumber(30))
