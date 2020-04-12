/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const words = { z: "zero", x: "six", w: "two", u: "four", g: "eight", s: "seven", v: "five", r: "three", o: "one", n: "nine" }
  const keys = Object.keys(words)
  const nums = { z: 0, x: 6, w: 2, u: 4, g: 8, s: 7, v: 5, r: 3, o: 1, n: 9 }
  const chars = {}

  for (let c of s) {
    chars[c] = (chars[c] || 0) + 1
  }
  const res = []

  for (let i = 0; i < keys.length; i++) {
    const c = keys[i]

    if (chars[c]) {
      for (let l of words[c]) {
        chars[l]--
      }
      res.push(nums[c])
      i--
    }
  }
  return res.sort((a, b) => a - b).join("")
}

console.log(originalDigits("zerozero"))
console.log(originalDigits("owoztneoer"))
console.log(originalDigits("fviefuro"))
