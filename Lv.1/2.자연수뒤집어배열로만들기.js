//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.

function solution(n) {
  const arr = [];

  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }

  return arr;
}

const result1 = solution(12345);

console.log(result1);
