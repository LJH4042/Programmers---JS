//문자열 my_string이 매개변수로 주어집니다.
//my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let array = [...my_string]; // ... : 배열이나 객체를 펼쳐서 개별 요소로 분리
  return array.reverse().join(""); //배열.join() : 배열을 문자열로 병합
}

const result1 = solution("jaron");
const result2 = solution("bread");

console.log(result1);
console.log(result2);
