//정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  if (direction === "right") {
    return numbers
      .slice(numbers.length - 1)
      .concat(numbers.slice(0, numbers.length - 1));
  } else {
    return numbers.slice(1).concat(numbers.slice(0, 1));
  }
}

const result1 = solution([1, 2, 3], "right");
const result2 = solution([4, 455, 6, 4, -1, 45, 6], "left");

console.log(result1);
console.log(result2);
