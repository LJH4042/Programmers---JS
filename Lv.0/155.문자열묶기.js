//문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  const count = strArr.map((count) => count.length);
  const set = [...new Set(count)];
  const arr = [];

  for (i = 0; i < set.length; i++) {
    let sum = 0;
    for (j = 0; j < count.length; j++) {
      if (set[i] === count[j]) sum++;
    }
    arr.push(sum);
  }

  return Math.max(...arr);
}

const result1 = solution(["a", "bc", "d", "efg", "hi"]);

console.log(result1);
