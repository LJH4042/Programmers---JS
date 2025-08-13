//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, n) {
  return my_string.substr(0, n); //문자열.substr(0, n) : 0부터 n번째까지 문자열을 추출
}

const result1 = solution("ProgrammerS123", 11);
const result2 = solution("He110W0r1d", 5);

console.log(result1);
console.log(result2);
