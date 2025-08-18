//직사각형 형태의 그림 파일이 있고, 이 그림 파일은 1 × 1 크기의 정사각형 크기의 픽셀로 이루어져 있습니다.
//이 그림 파일을 나타낸 문자열 배열 picture과 정수 k가 매개변수로 주어질 때, 이 그림 파일을 가로 세로로 k배 늘린 그림 파일을 나타내도록 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(picture, k) {
  const pic = [];

  for (i = 0; i < picture.length; i++) {
    const arr1 = picture[i].split("");
    const arr2 = [];

    for (j = 0; j < arr1.length; j++) arr2.push(arr1[j].repeat(k));
    for (j = 0; j < k; j++) pic.push(arr2.join(""));
  }

  return pic;
}

const result1 = solution(
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2
);
const result2 = solution(["x.x", ".x.", "x.x"], 3);

console.log(result1);
console.log(result2);
