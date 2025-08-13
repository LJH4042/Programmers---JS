//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.replace(/[aeiou]/gi, ""); //문자열.replace() : 특정 문자를 다른 문자로 변환
}

const result1 = solution("bus");
const result2 = solution("nice to meet you");

console.log(result1);
console.log(result2);
