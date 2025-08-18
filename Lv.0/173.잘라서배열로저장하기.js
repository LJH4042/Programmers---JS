//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  const arr = [];

  for (i = 0; i < my_str.length / n; i++) {
    arr.push([...my_str].slice(n * i, n * (i + 1)));
  }

  return arr.map((str) => str.join(""));
}

const result1 = solution("abc1Addfggg4556b", 6);
const result2 = solution("abcdef123", 3);

console.log(result1);
console.log(result2);
