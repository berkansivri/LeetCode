/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  words.sort((a, b) => a.length - b.length)
  let wordList = new Set()
  let allConcat = []
  let isConcat = function (word) {
    if (!word) return false
    let dp = new Array(word.length + 1).fill(false)
    dp[0] = true

    for (let end = 1; end <= word.length; end++) {
      for (let start = 0; start < end; start++) {
        if (dp[start] && wordList.has(word.slice(start, end))) {
          dp[end] = true
          break
        }
      }
    }
    return dp.pop()
  }

  for (let i = 0; i < words.length; i++) {
    if (isConcat(words[i])) {
      allConcat.push(words[i])
    }
    wordList.add(words[i])
  }
  return allConcat
}

console.log(
  findAllConcatenatedWordsInADict([
    'cat',
    'cats',
    'catsdogcats',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat'
  ])
)

console.log(findAllConcatenatedWordsInADict(['cat', 'dog', 'catdog']))
