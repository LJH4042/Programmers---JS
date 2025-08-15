//정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

const result1 = solution([2, 1, 6], 3);
const result2 = solution([5, 2, 1, 7, 5], 2);

console.log(result1);
console.log(result2);
