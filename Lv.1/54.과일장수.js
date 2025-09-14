function solution(k, m, score) {
  const count = Math.floor(score.length / m); //상자 개수 구하기
  const arr = score.sort((a, b) => b - a); //내림차순으로 정렬
  let answer = 0; //총 가격

  for (i = 0; i < count; i++) {
    const sli = arr.slice(i * m, i * m + m); //각 상자마다 담길 사과 m개
    answer += Math.min(...sli) * m; //(최저 사과 점수) x (한 상자에 담긴 사과 개수)
  }

  return answer;
}

const result1 = solution(3, 4, [1, 2, 3, 1, 2, 3, 1]);
const result2 = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);

console.log(result1);
console.log(result2);
