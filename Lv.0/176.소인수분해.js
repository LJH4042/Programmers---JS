//소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
//예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
//따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  const arr1 = [];
  const result = [];

  for (i = 1; i <= n; i++) if (n % i === 0) arr1.push(i);

  for (i = 0; i < arr1.length; i++) {
    const arr2 = [];
    for (j = 1; j <= arr1[i]; j++) if (arr1[i] % j === 0) arr2.push(j);
    if (arr2.length === 2) result.push(arr1[i]);
  }

  return result;
}

const result1 = solution(12);
const result2 = solution(17);
const result3 = solution(420);

console.log(result1);
console.log(result2);
console.log(result3);
