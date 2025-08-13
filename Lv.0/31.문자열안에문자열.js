//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2; //문자열1.includes(문자열2) : 문자열1 안에 문자열2가 있는 지 검색
}

const result1 = solution("ab6CDE443fgh22iJKlmn1o", "6CD");
const result2 = solution("ppprrrogrammers", "pppp");
const result3 = solution("AbcAbcA", "AAA");

console.log(result1);
console.log(result2);
console.log(result3);
