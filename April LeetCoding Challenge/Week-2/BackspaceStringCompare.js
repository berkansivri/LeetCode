/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {

  const getStr = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        if (i === 0)
          str = str.slice(1)
        else
          str = str.slice(0, i - 1) + str.slice(i + 1)
        i -= 2
      }
    }
    return str
  }

  return getStr(S) === getStr(T)
};

var backspaceCompare2 = function (S, T) {
  const getStr = (str) => {
    let stack = []
    for (let c of str) {
      if (c === "#")
        stack.pop()
      else
        stack.push(c)
    }
    return stack.join("")
  }
  return getStr(S) === getStr(T)
};

console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("ab#c", "ad#c"));