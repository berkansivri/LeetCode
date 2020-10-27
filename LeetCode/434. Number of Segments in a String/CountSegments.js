/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(' ').filter(x => x).length
}

console.log(countSegments('Hello, my name is Berkan'))
console.log(countSegments('Berkan'))
console.log(countSegments(''))
console.log(countSegments("love live! mu'sic forever"))
console.log(countSegments('                '))
