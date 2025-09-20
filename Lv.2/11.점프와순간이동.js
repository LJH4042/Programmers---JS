function solution(n) {
  let count = 1;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      count += 1;
    }
  }

  return count;
}

const result1 = solution(5);
const result2 = solution(6);
const result3 = solution(5000);

console.log(result1);
console.log(result2);
console.log(result3);
