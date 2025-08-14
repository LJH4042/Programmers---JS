//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const arr = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
      if (i !== j) {
        arr.push(numbers[i] * numbers[j]);
      }
    }
  }

  return Math.max(...arr);
}

const result1 = solution([1, 2, -3, 4, -5]);
const result2 = solution([0, -31, 24, 10, 1, 9]);
const result3 = solution([10, 20, 30, 5, 5, 20, 5]);

console.log(result1);
console.log(result2);
console.log(result3);
