//두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(q, r, code) {
  return [...code].filter((_, index) => index % q === r).join("");
}

const result1 = solution(3, 1, "qjnwezgrpirldywt");
const result2 = solution(1, 0, "programmers");

console.log(result1);
console.log(result2);
