//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((element) => {
    element % 2 === 0 ? odd++ : even++; //배열.forEach() : 반복문
  });

  return [odd, even];
}

const result1 = solution([1, 2, 3, 4, 5]);
const result2 = solution([1, 3, 5, 7]);

console.log(result1);
console.log(result2);
