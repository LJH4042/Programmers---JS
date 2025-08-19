//영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
//영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  const avg = score.map(([a, b]) => (a + b) / 2);
  const result = [];

  for (i = 0; i < avg.length; i++) {
    let count = 1;
    for (j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) count++;
    }
    result.push(count);
  }

  return result;
}

const result1 = solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
const result2 = solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);

console.log(result1);
console.log(result2);
