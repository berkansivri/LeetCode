/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.map = {}
}

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let len = word.length
  this.map[len] ? this.map[len].add(word) : (this.map[len] = new Set([word]))
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let len = word.length
  if (this.map[len]) {
    for (let str of this.map[len]) {
      for (var i = 0; i < len; i++) {
        if (word[i] !== '.' && word[i] !== str[i]) {
          break
        }
      }
      if (i === len) {
        return true
      }
    }
  }
  return false
}

let a = new WordDictionary()
console.log(a.addWord('bad'))
console.log(a.addWord('bad'))
console.log(a.addWord('dad'))
console.log(a.addWord('mad'))
console.log(a.search('pad'))
console.log(a.search('bad'))
console.log(a.search('.ad'))
console.log(a.search('b..'))
