function solution(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let num = 0;

    for (let j = i; j <= n; j++) {
      num += j;

      if (num === n) {
        count++;
        break;
      } else if (num > n) {
        break;
      }
    }
  }

  return count;
}

const result1 = solution(15);

console.log(result1);
