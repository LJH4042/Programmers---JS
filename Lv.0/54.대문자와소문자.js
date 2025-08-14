//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let str = "";

  for (i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      str += my_string[i].toLowerCase(my_string[i]);
    } else {
      str += my_string[i].toUpperCase(my_string[i]);
    }
  }

  return str;
}

const result1 = solution("cccCCC");
const result2 = solution("abCdEfghIJ");

console.log(result1);
console.log(result2);
