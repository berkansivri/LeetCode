const create = require("./CreateFileAddReadMe")
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/ /g,'')
  const stack = []

  while(s.length) {
    let num1 = ""
    while(!isNaN(s[0])) {
      num1 += s.charAt(0)
      s = s.slice(1)
    }
    if(num1) stack.push(num1)

    let opt = s.charAt(0)
    s = s.slice(1)
    
    let num2 = ""
    while(!isNaN(s[0])) {
      num2 += s.charAt(0)
      s = s.slice(1)
    }
    switch (opt) {
      case "+":
        stack.push(+num2)
        break;
      case "-":
        stack.push(-num2)
        break;
      case "*":
        stack.push(stack.pop() * num2)
        break;
      case "/":
        stack.push(parseInt(stack.pop() / num2, 10))
        break;
      
      default:
        break;
    }
  }
  return stack.reduce((a,c) => +a + c)
};

console.log(calculate("1 + 1"));
console.log(calculate("14-13/2"))
console.log(calculate("14/3-2"))
console.log(calculate("42"));
console.log(calculate("3-2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));

create("227. Basic Calculator II", calculate)