//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
//예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
  const bool = /[a-zA-Z]/.test(s);

  if (s.length === 4 || s.length === 6) {
    if (!bool) return true;
    else return false;
  } else return false;
}

const result1 = solution("a234");
const result2 = solution("1234");

console.log(result1);
console.log(result2);
