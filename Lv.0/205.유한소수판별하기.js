//소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
//기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
//두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

function gcd(a, b) {
  const arr = [];
  for (i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) arr.push(i);
  }
  return arr.length === 0 ? 1 : Math.max(...arr);
}

function solution(a, b) {
  const com = gcd(a, b);
  const den = b / com;

  const arr1 = [];
  for (i = 1; i <= den; i++) if (den % i === 0) arr1.push(i);

  const result = [];
  for (i = 0; i < arr1.length; i++) {
    const arr2 = [];
    for (j = 1; j <= arr1[i]; j++) if (arr1[i] % j === 0) arr2.push(j);
    if (arr2.length === 2) result.push(arr1[i]);
  }

  return result.every((num) => [2, 5].includes(num)) ? 1 : 2;
}

const result1 = solution(7, 20);
const result2 = solution(11, 22);
const result3 = solution(12, 21);

console.log(result1);
console.log(result2);
console.log(result3);
