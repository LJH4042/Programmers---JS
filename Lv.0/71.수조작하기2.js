//정수 배열 numLog가 주어집니다. 처음에 numLog[0]에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.
//  - "w" : n이 1 커집니다.
//  - "s" : n이 1 작아집니다.
//  - "d" : n이 10 커집니다.
//  - "a" : n이 10 작아집니다.
//그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 numLog입니다. 즉, numLog[i]는 numLog[0]로부터 총 i번의 조작을 가한 결과가 저장되어 있습니다.
//주어진 정수 배열 numLog에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(numLog) {
  const arr = [];

  for (i = 0; i < numLog.length; i++) {
    if (numLog[i + 1] - numLog[i] === 1) arr.push("w");
    else if (numLog[i + 1] - numLog[i] === -1) arr.push("s");
    else if (numLog[i + 1] - numLog[i] === 10) arr.push("d");
    else if (numLog[i + 1] - numLog[i] === -10) arr.push("a");
  }

  return arr.join("");
}

const result1 = solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]);

console.log(result1);
