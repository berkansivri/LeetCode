/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {}
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root
  for (let c of word) {
    if (!node[c]) node[c] = {}
    node = node[c]
  }
  node.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.searchNode = function (word) {
  let node = this.root
  for (let c of word) {
    if (node[c]) node = node[c]
    else return null
  }
  return node
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.searchNode(word)
  return node !== null && node.isEnd === true
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.searchNode(prefix)
  return node !== null
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie()

trie.insert('apple')
trie.search('apple') // returns true
trie.search('app') // returns false
trie.startsWith('app') // returns true
trie.insert('app')
trie.search('app') // returns true
