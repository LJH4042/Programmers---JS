function solution(nums) {
  const [...set] = new Set([...nums]);

  if (set.length > nums.length / 2) return nums.length / 2;
  else if (set.length <= nums.length / 2) return set.length;
}

const result1 = solution([3, 1, 2, 3]);
const result2 = solution([3, 3, 3, 2, 2, 4]);
const result3 = solution([3, 3, 3, 2, 2, 2]);

console.log(result1); // 2
console.log(result2); // 3
console.log(result3); // 4
