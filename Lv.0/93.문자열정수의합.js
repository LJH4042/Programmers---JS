//한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
  return num_str
    .split("")
    .map(Number)
    .reduce((total, current) => total + current, 0);
}

const result1 = solution("123456789");
const result2 = solution("1000000");

console.log(result1);
console.log(result2);
