function solution(n) {
  const nTwoDec = n.toString(2);
  const removeNZero = nTwoDec.replaceAll("0", "");
  const nLen = removeNZero.length;

  for (let i = n + 1; i <= 1000000; i++) {
    const nextTwoDec = i.toString(2);
    const removeNextZero = nextTwoDec.replaceAll("0", "");
    const nextLen = removeNextZero.length;

    if (nLen === nextLen) return i;
  }
}

const result1 = solution(78);
const result2 = solution(15);

console.log(result1);
console.log(result2);
