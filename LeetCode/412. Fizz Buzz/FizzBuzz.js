/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    let str = ''
    if (i % 3 === 0) str += 'Fizz'
    if (i % 5 === 0) str += 'Buzz'
    res.push(str || i.toString())
  }
  return res
};

console.log(fizzBuzz(15));