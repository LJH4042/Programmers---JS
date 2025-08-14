//정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
//  - arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

function solution(n) {
  const arr = Array(n);

  for (i = 0; i < n; i++) {
    arr[i] = [];

    for (j = 0; j < n; j++) {
      arr[i][j] = i === j ? 1 : 0;
    }
  }

  return arr;
}

const result1 = solution(3);
const result2 = solution(6);
const result3 = solution(1);

console.log(result1);
console.log(result2);
console.log(result3);
