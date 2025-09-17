//주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
//숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  let count = 0;

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        if (isPrime(num)) count++;
      }
    }
  }

  return count;
}

function isPrime(num) {
  for (l = 2; l < num; l++) {
    if (num % l === 0) return false;
  }
  return true;
}

const result1 = solution([1, 2, 3, 4]);
const result2 = solution([1, 2, 7, 6, 4]);

console.log(result1);
console.log(result2);
