//알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
  return myString.toUpperCase();
}

const result1 = solution("aBcDeFg");
const result2 = solution("AAA");

console.log(result1);
console.log(result2);
