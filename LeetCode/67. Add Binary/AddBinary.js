/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var a = a.split('')
  var b = b.split('')
  var result = ''
  var ai = a.length - 1
  var bi = b.length - 1
  var c = 0
  while (ai >= 0 || bi >= 0) {
    var total = (+a[ai] || 0) + (+b[bi] || 0)
    result = ((total + c) % 2) + result
    c = Math.floor((total + c) / 2)
    ai--
    bi--
  }
  if (c > 0) result = c + result
  return result
}

console.log(addBinary('1010', '1111'))
