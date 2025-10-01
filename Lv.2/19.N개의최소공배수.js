function lcd(a, b) {
  let num = 0;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) num = i;
  }

  return num;
}

function gcd(a, b) {
  return (a * b) / lcd(a, b);
}

function solution(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

const result1 = solution([2, 6, 8, 14]);
const result2 = solution([1, 2, 3]);

console.log(result1);
console.log(result2);
