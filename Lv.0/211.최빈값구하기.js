//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
//정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  const set = [...new Set(array)];
  let result = 0;
  let max = 0;
  let isDup = false;

  for (i = 0; i < set.length; i++) {
    let count = 0;
    for (j = 0; j < array.length; j++) if (set[i] === array[j]) count++;

    if (count > max) {
      max = count;
      result = set[i];
      isDup = false;
    } else if (count === max) isDup = true;
  }

  return isDup ? -1 : result;
}

const result1 = solution([1, 2, 3, 3, 3, 4]);
const result2 = solution([1, 1, 2, 2]);
const result3 = solution([1]);

console.log(result1);
console.log(result2);
console.log(result3);
