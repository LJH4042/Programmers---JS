//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
//두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  const start = Math.ceil(((2 * total) / num - (num - 1)) / 2);
  const arr = [];

  for (i = 0; i < num; i++) arr.push(start + i);

  return arr;
}

const result1 = solution(3, 12);
const result2 = solution(5, 15);
const result3 = solution(4, 14);
const result4 = solution(5, 5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
