//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  const arr = [];
  array.sort((a, b) => a - b);

  for (i = 0; i < array.length; i++) {
    const num = Math.abs(n - array[i]);
    arr.push(num);
  }

  return array[arr.indexOf(Math.min(...arr))];
}

const result1 = solution([3, 10, 28], 20);
const result2 = solution([10, 11, 12], 13);

console.log(result1);
console.log(result2);
