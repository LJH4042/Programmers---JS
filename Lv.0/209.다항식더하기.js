//한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
//다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  const arr = polynomial.split(" + ");

  const xArray = [];
  const numArray = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      const num =
        arr[i].slice(0, arr[i].length - 1) !== ""
          ? Number(arr[i].slice(0, arr[i].length - 1))
          : 1;
      xArray.push(num);
    } else numArray.push(Number(arr[i]));
  }

  const x = xArray.reduce((total, current) => total + current, 0);
  const num = numArray.reduce((total, current) => total + current, 0);

  if (x !== 0 && num !== 0) return (x === 1 ? "x" : `${x}x`) + " + " + num;
  else if (x !== 0) return x === 1 ? "x" : `${x}x`;
  else return String(num);
}

const result1 = solution("3x + 7 + x");
const result2 = solution("x + x + x");

console.log(result1);
console.log(result2);
