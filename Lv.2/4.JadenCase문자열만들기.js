function solution(s) {
  const preStr = s.toLowerCase();
  let str = preStr[0].toUpperCase();

  for (i = 1; i < preStr.length; i++) {
    if (s[i - 1] === " ") {
      str += preStr[i].toUpperCase();
    } else {
      str += preStr[i];
    }
  }

  return str;
}

const result1 = solution("3people unFollowed me");
const result2 = solution("for the last week");

console.log(result1);
console.log(result2);
