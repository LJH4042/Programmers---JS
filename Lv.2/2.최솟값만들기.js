function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

const result1 = solution([1, 4, 2], [5, 4, 4]);
const result2 = solution([1, 2], [3, 4]);

console.log(result1);
console.log(result2);
