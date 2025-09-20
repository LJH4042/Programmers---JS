function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}

const result1 = solution([70, 50, 80, 50], 100);
const result2 = solution([70, 80, 50], 100);

console.log(result1);
console.log(result2);
