//문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  const arr = my_string.replace(/[^0-9]/g, "").split("");
  return arr.sort((a, b) => a - b).map((e) => Number.parseInt(e));
}

const result1 = solution("hi12392");
const result2 = solution("p2o4i8gj2");
const result3 = solution("abcde0");

console.log(result1);
console.log(result2);
console.log(result3);
