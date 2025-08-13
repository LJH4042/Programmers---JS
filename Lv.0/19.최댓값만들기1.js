//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  numbers.sort((a, b) => b - a); // 내림차순
  return numbers[0] * numbers[1];
}

const result1 = solution([1, 2, 3, 4, 5]);
const result2 = solution([0, 31, 24, 10, 1, 9]);

console.log(result1);
console.log(result2);
