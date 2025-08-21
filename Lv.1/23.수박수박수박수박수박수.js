//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
//예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let str = "";

  for (i = 1; i <= n; i++) {
    if (i % 2 === 1) str += "수";
    else str += "박";
  }

  return str;
}

const result1 = solution(3);
const result2 = solution(4);

console.log(result1);
console.log(result2);
