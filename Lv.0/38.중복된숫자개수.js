//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
  let count = 0;

  array.forEach((element) => {
    if (element == n) count++;
  });

  return count;
}

const result1 = solution([1, 1, 2, 3, 4, 5], 1);
const result2 = solution([0, 2, 3, 4], 1);

console.log(result1);
console.log(result2);
