//문자열 binomial이 매개변수로 주어집니다.
//binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

function solution(binomial) {
  return eval(binomial);
}

const result1 = solution("43 + 12");
const result2 = solution("0 - 7777");
const result3 = solution("40000 * 40000");

console.log(result1);
console.log(result2);
console.log(result3);
