//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  let answer = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}

const result1 = solution(12);
const result2 = solution(5);

console.log(result1);
console.log(result2);
