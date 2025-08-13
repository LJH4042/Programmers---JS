//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//  - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  let other = 0;

  sides.sort((a, b) => a - b);

  for (i = 0; i < sides.length - 1; i++) {
    other += sides[i];
  }

  return sides[sides.length - 1] < other ? 1 : 2;
}

const result1 = solution([1, 2, 3]);
const result2 = solution([3, 6, 2]);
const result3 = solution([199, 72, 222]);

console.log(result1);
console.log(result2);
console.log(result3);
