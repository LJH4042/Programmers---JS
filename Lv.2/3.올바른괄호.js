function solution(s) {
  const arr = [];

  for (i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (arr[arr.length - 1] === "(" && arr.length > 0) arr.pop();
      else arr.push(s[i]);
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length === 0 ? true : false;
}

const result1 = solution("()()");
const result2 = solution("(())()");
const result3 = solution(")()(");
const result4 = solution("(()(");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
