//2차원 정수 배열 board와 정수 k가 주어집니다.
//i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

function solution(board, k) {
  let sum = 0;

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (i + j <= k) sum += board[i][j];
    }
  }

  return sum;
}

const result1 = solution(
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ],
  2
);

console.log(result1);
