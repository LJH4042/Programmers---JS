//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

function solution(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
}

const result1 = solution([1, 2, 3, 4]);
const result2 = solution([5, 5]);

console.log(result1);
console.log(result2);
