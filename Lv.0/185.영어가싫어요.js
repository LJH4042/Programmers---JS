//영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (i = 0; i < num.length; i++) {
    numbers = numbers.replaceAll(num[i], i);
  }

  return Number(numbers);
}

const result1 = solution("onetwothreefourfivesixseveneightnine");
const result2 = solution("onefourzerosixseven");

console.log(result1);
console.log(result2);
