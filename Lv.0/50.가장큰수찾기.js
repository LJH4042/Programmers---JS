//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  const num = Math.max(...array); //MAth.max() : 배열에서 가장 큰 수 찾기
  return [num, array.indexOf(num)]; //배열.indexOf(n) : n의 인덱스 번호
}

const result1 = solution([1, 8, 3]);
const result2 = solution([9, 10, 11, 8]);

console.log(result1);
console.log(result2);
