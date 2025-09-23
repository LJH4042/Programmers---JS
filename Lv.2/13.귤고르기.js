function solution(k, tangerine) {
  const arr = new Array(Math.max(...tangerine)).fill(0);
  let answer = 0;
  let idx = 0;
  let count = 0;

  for (let i = 0; i < tangerine.length; i++) {
    arr[tangerine[i] - 1] += 1;
  }

  arr.sort((a, b) => b - a);

  while (answer < k) {
    answer += arr[idx];
    idx += 1;
    count += 1;
  }

  return count;
}

const result1 = solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
const result2 = solution(4, [1, 3, 2, 5, 4, 5, 2, 3]);
const result3 = solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);

console.log(result1);
console.log(result2);
console.log(result3);
