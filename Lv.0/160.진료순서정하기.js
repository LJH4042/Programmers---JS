//외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
//정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(emergency) {
  const arr = [];

  for (i = 0; i < emergency.length; i++) {
    let count = 1;
    for (j = 0; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) count++;
    }
    arr.push(count);
  }

  return arr;
}

const result1 = solution([3, 76, 24]);
const result2 = solution([1, 2, 3, 4, 5, 6, 7]);
const result3 = solution([30, 10, 23, 6, 100]);

console.log(result1);
console.log(result2);
console.log(result3);
