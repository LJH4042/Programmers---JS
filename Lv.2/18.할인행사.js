function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const arr = Array(want.length).fill(0);

    for (let j = i; j < i + 10; j++) {
      const idx = want.indexOf(discount[j]);
      arr[idx] += 1;
    }

    let check = true;
    for (let j = 0; j < number.length; j++) {
      if (arr[j] !== number[j]) {
        check = false;
        break;
      }
    }

    if (check) answer += 1;
  }

  return answer;
}

const result1 = solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);

const result2 = solution(
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ]
);

console.log(result1);
console.log(result2);
