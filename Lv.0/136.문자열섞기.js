//길이가 같은 두 문자열 str1과 str2가 주어집니다.
//두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

function solution(str1, str2) {
  let str = "";

  for (i = 0; i < str1.length + str2.length; i++) {
    if (i % 2 === 0) str += str1[Math.floor(i / 2)];
    else str += str2[Math.floor(i / 2)];
  }

  return str;
}

const result1 = solution("aaaaa", "bbbbb");

console.log(result1);
