//문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

function solution(myString, pat) {
  for (i = 0; i < myString.length; i++) {
    if (myString.endsWith(pat) === false) myString = myString.slice(0, -1);
    else return myString;
  }
}

const result1 = solution("AbCdEFG", "dE");
const result2 = solution("AAAAaaaa", "a");

console.log(result1);
console.log(result2);
