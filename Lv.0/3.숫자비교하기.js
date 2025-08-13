//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

const result1 = solution(2, 3);
const result2 = solution(11, 11);
const result3 = solution(7, 99);

console.log(result1);
console.log(result2);
console.log(result3);
