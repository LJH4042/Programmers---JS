//정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(M, N) {
  return M * N - 1;
}

const result1 = solution(2, 2);
const result2 = solution(2, 5);
const result3 = solution(1, 1);

console.log(result1);
console.log(result2);
console.log(result3);
