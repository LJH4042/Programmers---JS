//어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
//예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
//"z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let code = s.charCodeAt(i);

    if (char === " ") result += " ";
    else if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + n) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + n) % 26) + 97);
    }
  }

  return result;
}

const result1 = solution("AB", 1);
const result2 = solution("z", 1);
const result3 = solution("a B z", 4);

console.log(result1);
console.log(result2);
console.log(result3);
