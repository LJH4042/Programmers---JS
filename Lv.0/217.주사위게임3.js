//1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
//  - 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
//  - 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
//  - 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
//  - 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
//  - 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
//네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const set = [...new Set(arr)];

  const countArr = [];
  for (i = 0; i < set.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) if (set[i] === arr[j]) count++;
    countArr.push(count);
  }

  const maxIndex = countArr.indexOf(Math.max(...countArr));
  const minIndex = countArr.indexOf(Math.min(...countArr));

  if (countArr.length === 1) return 1111 * set[0];
  else if (countArr.length === 2) {
    if (countArr[0] !== countArr[1])
      return (10 * set[maxIndex] + set[minIndex]) ** 2;
    else if (countArr[0] === countArr[1])
      return (set[0] + set[1]) * Math.abs(set[0] - set[1]);
  } else if (countArr.length === 3) {
    const remain = set.filter((_, idx) => idx !== maxIndex);
    return remain[0] * remain[1];
  } else if (countArr.length === 4) return Math.min(...set);
}

const result1 = solution(2, 2, 2, 2);
const result2 = solution(4, 1, 4, 4);
const result3 = solution(6, 3, 3, 6);
const result4 = solution(2, 5, 2, 6);
const result5 = solution(6, 4, 2, 5);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
