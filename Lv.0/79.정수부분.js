//실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

function solution(flo) {
  return Math.floor(flo);
}

const result1 = solution(1.42);
const result2 = solution(69.32);

console.log(result1);
console.log(result2);
