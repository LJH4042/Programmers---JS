//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

function solution(n) {
  let count = 0;

  for (i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

function isPrime(num) {
  for (j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) return false;
  }
  return true;
}

const result1 = solution(10);
const result2 = solution(5);

console.log(result1);
console.log(result2);
