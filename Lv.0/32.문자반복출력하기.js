//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  let str = "";

  for (i = 0; i < my_string.length; i++) {
    str += my_string[i].repeat(n); //문자열.repeat(n) : 문자열을 n번 반복
  }

  return str;
}

const result = solution("hello", 3);

console.log(result);
