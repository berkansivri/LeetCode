/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .trim()
    .split(' ')
    .filter(x => x)
    .reverse()
    .join(' ')
}

console.log(reverseWords('the sky is blue'))
console.log(reverseWords('  hello world!  '))
console.log(reverseWords('a good   example'))
