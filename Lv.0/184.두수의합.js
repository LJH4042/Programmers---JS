//0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.

function solution(a, b) {
  return String(BigInt(a) + BigInt(b));
}

const result1 = solution("582", "734");
const result2 = solution("18446744073709551615", "287346502836570928366");
const result3 = solution("0", "0");

console.log(result1);
console.log(result2);
console.log(result3);
