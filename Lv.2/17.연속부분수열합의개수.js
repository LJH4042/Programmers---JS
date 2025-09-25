function solution(elements) {
  const answer = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += elements[j];
      answer.add(sum);
    }
    elements = elements
      .slice(1, elements.length + 1)
      .concat(elements.slice(0, 1));
  }

  return answer.size;
}

const result1 = solution([7, 9, 1, 1, 4]);

console.log(result1);
