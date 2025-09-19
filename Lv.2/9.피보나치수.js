function solution(n) {
  let num1 = 0;
  let num2 = 1;

  for (let i = 2; i <= n; i++) {
    const tmp = num2;
    num2 = (tmp + num1) % 1234567;
    num1 = tmp;
  }

  return num2;
}

const result1 = solution(3);
const result2 = solution(5);

console.log(result1);
console.log(result2);
