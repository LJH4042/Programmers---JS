//명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
//다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
//이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.
//모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
  const arr1 = [];
  const arr2 = [];

  for (i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
    arr1.push(sizes[i][0]);
    arr2.push(sizes[i][1]);
  }

  return Math.max(...arr1) * Math.max(...arr2);
}

const result1 = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
const result2 = solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
const result3 = solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);

console.log(result1);
console.log(result2);
console.log(result3);
