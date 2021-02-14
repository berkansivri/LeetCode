/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

var licenseKeyFormatting = function (S, K) {
  const arr = S.replace(/-/g, '').toUpperCase().split('')

  for (let i = arr.length - K - 1; i >= 0; i -= K) {
    arr[i] += '-'
  }

  return arr.join('')
}

var licenseKeyFormatting2 = function (S, K) {
  const str = S.split('-').join('').split('').reverse().join('')
  const formatted = []

  for (let i = 0; i < str.length; i += K) {
    formatted.push(str.substr(i, K).split('').reverse().join(''))
  }

  return formatted.reverse().join('-').toUpperCase()
}

console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4))
console.log(licenseKeyFormatting('2-5g-3-J', 2))
