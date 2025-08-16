//문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, s, e) {
  const str1 = my_string.substr(s, e - s + 1);
  const str2 = str1.split("").reverse().join("");

  return my_string.replace(str1, str2);
}

const result1 = solution("Progra21Sremm3", 6, 12);
const result2 = solution("Stanley1yelnatS", 4, 10);

console.log(result1);
console.log(result2);
