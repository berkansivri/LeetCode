  /**
   * @param {string[]} words
   * @return {number[][]}
   */
  var palindromePairs = function (words) {

    const isPalindrome = (str) => {
      const len = str.length
      const mid = Math.floor(len / 2)
      for (let i = 0; i < mid; i++)
        if (str[i] !== str[len - i - 1])
          return false
      return true
      // return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i)
      // return str == str.split('').reverse().join('')
    }

    const res = [],
      len = words.length
    for (let i = 0; i < len; i++) {
      let f1 = words[i][0]
      for (let j = 0; j < len; j++) {
        if (i !== j) {
          let l2 = words[j].slice(-1)
          if ((f1 && l2) && f1 !== l2) continue
          if (isPalindrome(words[i] + words[j]))
            res.push([i, j])
        }
      }
    }
    return res
  };

  console.log(palindromePairs(["a", "b", "c", "ab", "ac", "aa"]));
  console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));
  console.log(palindromePairs(["a", ""]));
  // [[0,1],[1,0],[3,2],[2,4]] 
  console.log(palindromePairs(["bat", "tab", "cat"]));
  // [[0,1],[1,0]] 