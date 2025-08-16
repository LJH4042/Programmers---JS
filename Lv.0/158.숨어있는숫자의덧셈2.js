//문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  const arr = my_string
    .replace(/[a-zA-Z]/g, "-")
    .split("-")
    .filter((str) => str !== "")
    .map(Number);

  return arr.reduce((total, current) => (total += current), 0);
}

const result1 = solution("aAb1B2cC34oOp");
const result2 = solution("1a2b3c4d123Z");

console.log(result1);
console.log(result2);
