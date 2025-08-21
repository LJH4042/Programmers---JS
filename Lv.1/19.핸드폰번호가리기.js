//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
//전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  const front = phone_number.slice(0, phone_number.length - 4);
  const pwd = front
    .split("")
    .map((num) => (num = "*"))
    .join("");

  const back = phone_number.slice(phone_number.length - 4);

  return pwd + back;
}

const result1 = solution("01033334444");
const result2 = solution("027778888");

console.log(result1);
console.log(result2);
