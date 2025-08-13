//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000); //Math.floor() : 소수값을 버림
}

const result1 = solution(3, 2);
const result2 = solution(7, 3);
const result3 = solution(1, 16);

console.log(result1);
console.log(result2);
console.log(result3);
