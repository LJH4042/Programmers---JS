//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
//예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
//정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  array.sort((a, b) => a - b);
  return array[Math.floor(array.length / 2)];
}

const result1 = solution([1, 2, 7, 10, 11]);
const result2 = solution([9, -1, 0]);

console.log(result1);
console.log(result2);
