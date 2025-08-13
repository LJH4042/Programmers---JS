//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(strlist) {
  return strlist.map((array) => array.length); //배열.map() : 배열 요소에 똑같은 함수를 실행한 후 그 결과를 새로운 배열로 반환
}

const result1 = solution(["We", "are", "the", "world!"]);
const result2 = solution(["I", "Love", "Programmers."]);

console.log(result1);
console.log(result2);
