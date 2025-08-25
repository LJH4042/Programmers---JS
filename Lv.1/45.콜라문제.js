function solution(a, b, n) {
  let result = 0;
  let num = n;

  while (num >= a) {
    const exchange = Math.floor(num / a) * b;
    result += exchange;
    num = (num % a) + exchange;
  }

  return result;
}

const result1 = solution(2, 1, 20);
const result2 = solution(3, 1, 20);

console.log(result1);
console.log(result2);
