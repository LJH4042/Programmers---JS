//정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
//단, arr에 2가 없는 경우 [-1]을 return 합니다.

function solution(arr) {
  const first = arr.indexOf(2);
  const last = arr.lastIndexOf(2);

  if (first === -1) return [-1];
  else return arr.slice(first, last + 1);
}

const result1 = solution([1, 2, 1, 4, 5, 2, 9]);
const result2 = solution([1, 2, 1]);
const result3 = solution([1, 1, 1]);
const result4 = solution([1, 2, 1, 2, 1, 10, 2, 1]);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
