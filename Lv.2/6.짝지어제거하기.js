function solution(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === arr[arr.length - 1]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }

  return arr.length > 0 ? 0 : 1;
}

const result1 = solution("baabaa");
const result2 = solution("cdcd");

console.log(result1);
console.log(result2);
