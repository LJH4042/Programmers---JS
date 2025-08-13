//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
//num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  return num_list.reverse(); //배열.reverse() : 배열 뒤집기
}

const result1 = solution([1, 2, 3, 4, 5]);
const result2 = solution([1, 1, 1, 1, 1, 2]);
const result3 = solution([1, 0, 1, 1, 1, 3, 5]);

console.log(result1);
console.log(result2);
console.log(result3);
