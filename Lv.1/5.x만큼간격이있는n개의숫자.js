//함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  const arr = [];
  let count = 1;

  while (count <= n) {
    arr.push(x * count);
    count++;
  }

  return arr;
}

const result1 = solution(2, 5);
const result2 = solution(4, 3);
const result3 = solution(-4, 2);

console.log(result1);
console.log(result2);
console.log(result3);
