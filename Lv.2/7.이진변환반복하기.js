function solution(s) {
  let changeCount = 0;
  let zeroCount = 0;
  let answer = s;

  while (answer !== "1") {
    let str = "";

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === "0") zeroCount++;
      else str += answer[i];
    }

    const len = str.length;
    answer = len.toString(2);
    changeCount++;
  }

  return [changeCount, zeroCount];
}

const result1 = solution("110010101001");
const result2 = solution("01110");
const result3 = solution("1111111");

console.log(result1);
console.log(result2);
console.log(result3);
