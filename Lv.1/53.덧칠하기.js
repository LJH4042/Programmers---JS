function solution(n, m, section) {
  let answer = 0;
  let len = 0;

  for (i = 0; i < section.length; i++) {
    if (section[i] > len) {
      answer++;
      len = section[i] + m - 1;
    }
  }

  return answer;
}

const result1 = solution(8, 4, [2, 3, 6]);
const result2 = solution(5, 4, [1, 3]);
const result3 = solution(4, 1, [1, 2, 3, 4]);

console.log(result1);
console.log(result2);
console.log(result3);
