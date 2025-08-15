//정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  const sum = num_list.reduce((total, current) => total + current, 0) ** 2;
  const double = num_list.reduce((total, current) => total * current, 1);
  return sum > double ? 1 : 0;
}

const result1 = solution([3, 4, 5, 2, 1]);
const result2 = solution([5, 7, 8, 3]);

console.log(result1);
console.log(result2);
