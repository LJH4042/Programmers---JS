function solution(n) {
  let num1 = 1;
  let num2 = 1;

  for (let i = 1; i < n; i++) {
    const tmp = num2;
    num2 = (num2 + num1) % 1234567;
    num1 = tmp;
  }

  return num2;
}

const result1 = solution(4);
const result2 = solution(3);

console.log(result1);
console.log(result2);
