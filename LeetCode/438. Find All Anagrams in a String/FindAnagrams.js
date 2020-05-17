/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  const res = []
  let counter = 0
  const map = p.split('').reduce((a, c) => {
    if (a[c]) a[c]++
    else {
      a[c] = 1
      counter++
    }
    return a
  }, {})

  let begin = 0,
    end = 0,
    lenS = s.length,
    lenP = p.length

  while (end < lenS) {
    let c = s[end]
    if (map[c] !== undefined) {
      map[c]--
      if (map[c] === 0) counter--
    }
    end++

    while (counter === 0) {
      let l = s[begin]
      if (map[l] !== undefined) {
        if (map[l] === 0) counter++
        map[l]++
      }
      if (end - begin === lenP) {
        res.push(begin)
      }
      begin++
    }
  }
  return res
}

var findAnagrams2 = function (s, p) {
  let lenS = s.length,
    lenP = p.length
  const chars = p.split('').reduce((a, c) => {
    a[c] = ++a[c] || 1
    return a
  }, {})
  const res = {}
  for (let i = 0; i <= lenS - lenP; i++) {
    if (res[i - 1]) {
      if (s[i - 1] === s[lenP + i - 1]) {
        res[i] = true
      }
    } else {
      if (isAnagram(s.slice(i, lenP + i), { ...chars })) {
        res[i] = true
      }
    }
  }
  return Object.keys(res)
}

function isAnagram(str, map) {
  for (let c of str) {
    if (map[c] > 0) map[c]--
    else return false
  }
  return true
}

console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('', 'abc'))
console.log(findAnagrams('abab', 'ab'))
