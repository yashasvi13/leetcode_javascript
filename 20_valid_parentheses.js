//approach 1
const isValid = (s) => {
  let stack = [];
  if (
    s.length < 2 ||
    s.length % 2 !== 0 ||
    s.charAt(0) === ")" ||
    s.charAt(0) === "}" ||
    s.charAt(0) === "]"
  )
    return false;
  else {
    for (let i = 0; i < s.length; i++) {
      let paren = s.charAt(i);
      let last = stack[stack.length - 1];
      if (paren === "(" || paren === "{" || paren === "[") {
        stack.push(paren);
      } else if (
        (last === "(" && paren === ")") ||
        (last === "[" && paren === "]") ||
        (last === "{" && paren === "}")
      ) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
};

//Approach 2

// const isValid = (s) => {
//   if (
//     s.length < 2 ||
//     s.charAt(0) === ")" ||
//     s.charAt(0) === "}" ||
//     s.charAt(0) === "]"
//   )
//     return false;
//   else {
//     while (s.includes("{}") || s.includes("()") || s.includes("[]")) {
//       console.log(s);
//       s = s.replace("{}", "").replace("()", "").replace("[]", "");
//     }
//   }
//   return s.length === 0;
// };

console.log(isValid("(}}"));

//''
//{}
//{]
//}}
//}{
//{()}
//{}()
