//문자열 s가 매개변수로 주어집니다.
//s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  const arr = [];

  for (i = 0; i < s.length; i++) {
    let count = 0;
    for (j = 0; j < s.length; j++) {
      if (s[i] === s[j]) count++;
    }
    if (count === 1) arr.push(s[i]);
  }

  return arr.sort().join("");
}

const result1 = solution("abcabcadc");
const result2 = solution("abdc");
const result3 = solution("hello");

console.log(result1);
console.log(result2);
console.log(result3);
