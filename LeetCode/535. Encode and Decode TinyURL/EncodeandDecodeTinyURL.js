/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

const map = new Map()
const url = "http://tinyurl.com/"
var encode = function(longUrl) {
  let key = Date.now()
  map.set(key, longUrl)
  return url + key
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  const key = shortUrl.split(url).pop()
  return map.get(+key)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const a = encode("https://leetcode.com/problems/design-tinyurl")
console.log(a);
const b = decode(a)
console.log(b);