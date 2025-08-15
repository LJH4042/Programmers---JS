//정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  for (i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
}

const result1 = solution([12, 4, 15, 46, 38, -2, 15]);
const result2 = solution([13, 22, 53, 24, 15, 6]);

console.log(result1);
console.log(result2);
