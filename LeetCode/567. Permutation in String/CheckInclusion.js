/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let counter = 0
  const map = s1.split('').reduce((a, c) => {
    if (a[c]) {
      a[c]++
    } else {
      a[c] = 1
      counter++
    }
    return a
  }, {})

  let begin = 0,
    end = 0
  while (end < s2.length) {
    let c = s2[end]
    if (map[c] !== undefined) {
      map[c]--
      if (map[c] === 0) counter--
    }
    end++

    while (counter === 0) {
      let l = s2[begin]
      if (map[l] !== undefined) {
        if (map[l] === 0) counter++
        map[l]++
      }
      if (end - begin === s1.length) {
        return true
      }
      begin++
    }
  }
  return false
}

console.log(checkInclusion('adc', 'dcda'))
console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaoo'))
