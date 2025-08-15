//정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  return (
    Number(num_list.filter((num) => num % 2 === 0).join("")) +
    Number(num_list.filter((num) => num % 2 === 1).join(""))
  );
}

const result1 = solution([3, 4, 5, 2, 1]);
const result2 = solution([5, 7, 8, 3]);

console.log(result1);
console.log(result2);
