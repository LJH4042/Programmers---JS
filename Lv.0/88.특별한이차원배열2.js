//n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때, arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.
//  - 0 ≤ i, j < n인 정수 i, j에 대하여 arr[i][j] = arr[j][i]

function solution(arr) {
  let bool = true;

  loop: for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        bool = false;
        break loop;
      }
    }
  }

  return bool ? 1 : 0;
}

const result1 = solution([
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
]);
const result2 = solution([
  [19, 498, 258, 587],
  [63, 93, 7, 754],
  [258, 7, 1000, 723],
  [587, 754, 723, 81],
]);

console.log(result1);
console.log(result2);
