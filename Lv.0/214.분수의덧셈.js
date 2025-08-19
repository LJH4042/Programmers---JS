//첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
//두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function gcd(a, b) {
  const arr = [];
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) arr.push(i);
  }
  return arr.length === 0 ? 1 : Math.max(...arr);
}

function lcd(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
  const lcdNum = lcd(denom1, denom2);
  const num_1 = (lcdNum / denom1) * numer1;
  const num_2 = (lcdNum / denom2) * numer2;

  let numerSum = num_1 + num_2;
  let denomSum = lcdNum;

  const div = gcd(numerSum, denomSum);
  numerSum /= div;
  denomSum /= div;

  return [numerSum, denomSum];
}

const result1 = solution(1, 2, 3, 4);
const result2 = solution(9, 2, 1, 3);

console.log(result1);
console.log(result2);
