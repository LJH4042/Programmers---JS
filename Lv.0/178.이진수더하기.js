//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
  const arr1 = bin1.split("").map(Number).reverse();
  const arr2 = bin2.split("").map(Number).reverse();

  let num1 = 0;
  let num2 = 0;

  for (i = 0; i < arr1.length; i++) num1 += 2 ** i * arr1[i];
  for (i = 0; i < arr2.length; i++) num2 += 2 ** i * arr2[i];

  let result = num1 + num2;
  if (result === 0) return "0";

  let str = "";

  while (result !== 0) {
    str += result % 2;
    result = Math.floor(result / 2);
  }

  return str.split("").reverse().join("");
}

const result1 = solution("10", "11");
const result2 = solution("1001", "1111");

console.log(result1);
console.log(result2);
