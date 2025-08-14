//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  const arr = [];

  for (i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  return arr;
}

const result1 = solution(24);
const result2 = solution(29);

console.log(result1);
console.log(result2);
