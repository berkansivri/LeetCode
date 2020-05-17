/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

//NOT ACCEPTED. WILL CONTINUE...
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0
  let len = beginWord.length,
    result = [],
    tempBegin = beginWord
  const loop = (tempWordList, arr) => {
    for (let word of tempWordList) {
      let common = [],
        charIndex = 0,
        endIndex = 0,
        endCheck = [],
        alternative = ''
      for (let i = 0; i < len; i++) {
        charIndex = tempBegin.indexOf(word[i])
        endIndex = endWord.indexOf(tempBegin[i])
        if (charIndex > -1) common.push(word[i])
        if (endIndex > -1) endCheck.push(word[i])
      }

      if (endCheck.length >= len - 1) {
        arr.push(endWord)
        break
      } else {
        if (common.length >= len - 1) {
          tempWordList = tempWordList.filter(x => x !== word)
          for (let item of tempWordList) {
            let temp = []
            for (let i = 0; i < len; i++) {
              charIndex = tempBegin.indexOf(item[i])
              if (charIndex > -1) temp.push(item[i])
            }
            if (temp.length >= len - 1) {
              alternative = item
            }
          }
          if (alternative.length > 0) {
            loop(tempWordList, [...arr])
          }
          arr.push(word)
          tempBegin = word
        }
      }
    }
    result.push([...arr])
  }
  loop(wordList, [beginWord])
  let minLength = Math.min.apply(
    Math,
    result.map(function (arr) {
      return arr.length
    })
  )
  return result.filter(x => x.length === minLength)
}
