//이차원 정수 배열 arr이 매개변수로 주어집니다.
//arr의 행의 수가 더 많다면 열의 수가 행의 수와 같아지도록 각 행의 끝에 0을 추가하고,
//열의 수가 더 많다면 행의 수가 열의 수와 같아지도록 각 열의 끝에 0을 추가한 이차원 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr) {
  const row = arr[0].length;
  const column = arr.length;
  const max = Math.max(row, column);

  for (let i = 0; i < column; i++) {
    while (arr[i].length < max) {
      arr[i].push(0);
    }
  }

  for (let i = column; i < max; i++) {
    arr.push(Array(max).fill(0));
  }

  return arr;
}

const result1 = solution([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);
const result2 = solution([
  [57, 192, 534, 2],
  [9, 345, 192, 999],
]);
const result3 = solution([
  [1, 2],
  [3, 4],
]);

console.log(result1);
console.log(result2);
console.log(result3);
