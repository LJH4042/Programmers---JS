//문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  let count = 0;
  let length = myString.length;

  for (i = 0; i < length; i++) {
    if (myString.startsWith(pat) === true) count++;
    myString = myString.slice(1);
  }

  return count;
}

const result1 = solution("banana", "ana");
const result2 = solution("aaaa", "aa");

console.log(result1);
console.log(result2);
