//위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });

  return arr;
}

const result1 = solution(
  [0, 1, 2, 3, 4],
  [
    [0, 3],
    [1, 2],
    [1, 4],
  ]
);

console.log(result1);
