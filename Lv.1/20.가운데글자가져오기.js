//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  if (s.length % 2 === 1) return s[Math.floor(s.length / 2)];
  else if (s.length % 2 === 0)
    return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}

const result1 = solution("abcde");
const result2 = solution("qwer");

console.log(result1);
console.log(result2);
