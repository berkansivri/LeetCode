/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.cap = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let val = this.cache.get(key)
  if (val) {
    this.cache.delete(key)
    this.cache.set(key, val)
    return val
  } else
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let val = this.cache.get(key)
  if (val) {
    this.cache.delete(key)
    this.cache.set(key, value)
  } else {
    if (this.cache.size < this.cap) {
      this.cache.set(key, value)
    } else {
      let ky = this.cache.delete(this.cache.keys().next().value)
      this.cache.delete(ky)
      this.cache.set(key, value)
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4