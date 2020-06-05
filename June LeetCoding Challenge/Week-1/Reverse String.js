/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0,
    right = s.length - 1
  while (left < right) {
    [s[left++], s[right--]] = [s[right], s[left]]
  }
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
