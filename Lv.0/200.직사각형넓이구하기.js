//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
//직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  const widthArr = [];
  const verticalArr = [];

  for (i = 0; i < dots.length; i++) widthArr.push(dots[i][0]);
  for (i = 0; i < dots.length; i++) verticalArr.push(dots[i][1]);

  const width = [Math.max(...widthArr), Math.min(...widthArr)];
  const vertical = [Math.max(...verticalArr), Math.min(...verticalArr)];

  return Math.abs(width[1] - width[0]) * Math.abs(vertical[1] - vertical[0]);
}

const result1 = solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
const result2 = solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);

console.log(result1);
console.log(result2);
