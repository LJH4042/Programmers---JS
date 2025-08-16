//두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다.
//첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

function solution(a, d, included) {
  const arr = [a];
  let sum = a;

  for (i = 1; i < included.length; i++) {
    sum += d;
    arr.push(sum);
  }

  return arr
    .filter((_, index) => !included[index] === false)
    .reduce((total, current) => total + current, 0);
}

const result1 = solution(3, 4, [true, false, false, true, true]);
const result2 = solution(7, 1, [
  false,
  false,
  false,
  true,
  false,
  false,
  false,
]);

console.log(result1);
console.log(result2);
