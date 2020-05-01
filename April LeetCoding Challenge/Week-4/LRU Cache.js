/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = {};
  this.arr = [];
  this.len = 0;
  this.cap = capacity;
  this.indexes = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let val = -1
  if (this.map[key] !== undefined) {
    delete this.arr[this.indexes[key]]
    this.indexes[key] = this.arr.length
    this.arr.push(key)
    val = this.map[key];
  }
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if(this.map[key]) {
    delete this.arr[this.indexes[key]]
    this.indexes[key] = this.arr.length
    this.arr.push(key)
    this.map[key] = value
  } else if(this.len === this.cap){
    let deletedKey = this.arr[0], i = 0
    while(!deletedKey) {
      deletedKey = this.arr[++i]
    }
    delete this.arr[i]
    delete this.indexes[deletedKey]
    delete this.map[deletedKey]
    this.indexes[key] = this.arr.length
    this.arr.push(key)
    this.map[key] = value
  } else {
    this.map[key] = value
    this.indexes[key] = this.arr.length
    this.arr.push(key)
    this.len++
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache(2 /* capacity */);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1); // returns 1
// cache.put(3, 3); // evicts key 2
// cache.get(2); // returns -1 (not found)
// cache.put(4, 4); // evicts key 1
// cache.get(1); // returns -1 (not found)
// cache.get(3); // returns 3
// cache.get(4); // returns 4

const cache = new LRUCache(3 /* capacity */);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.put(4, 4);
cache.get(4); 
cache.get(3); 
cache.get(2); 
cache.get(1);
cache.put(5,5) 
cache.get(1) 
cache.get(2) 
cache.get(3) 
cache.get(4) 
cache.get(5)