/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = []
  for(let c of s) {
    if(c !== ']') { // get chars until ]
      stack.push(c)
      continue
    }

    let str = ''
    while(stack.slice(-1)[0] !== "[") str = stack.pop() + str // pop until [ to get string part
    stack.pop() // pop for [
    let num = ''
    while(!isNaN(stack.slice(-1)[0])) num = stack.pop() + num // pop until not number char
    
    stack.push(str.repeat(num)) // push repeated string to stack again
  }
  return stack.join('')
};

console.log(decodeString("3[a]2[bc]")); //aaabcbc
console.log(decodeString("3[a2[c]]")); //accaccacc
console.log(decodeString("2[abc]3[cd]ef")); //abcabccdcdcdef