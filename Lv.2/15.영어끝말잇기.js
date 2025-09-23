function solution(n, words) {
  let human = 0;
  let round = 0;

  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const next = words[i];

    if (
      prev.charAt(prev.length - 1) !== next.charAt(0) ||
      words.indexOf(words[i]) !== i
    ) {
      human = (i % n) + 1;
      round = Math.floor(i / n) + 1;
      break;
    }
  }

  return [human, round];
}

const result1 = solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);
const result2 = solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);
const result3 = solution(2, [
  "hello",
  "one",
  "even",
  "never",
  "now",
  "world",
  "draw",
]);

console.log(result1);
console.log(result2);
console.log(result3);
