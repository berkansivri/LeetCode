/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  return !s.includes('LLL') && (s.match(/A/g) || []).length < 2
}

console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))
