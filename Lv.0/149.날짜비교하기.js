//정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.

function solution(date1, date2) {
  return new Date(date1) >= new Date(date2) ? 0 : 1;
}

const result1 = solution([2021, 12, 28], [2021, 12, 29]);
const result2 = solution([1024, 10, 24], [1024, 10, 24]);

console.log(result1);
console.log(result2);
