function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = {};
  let mostFrequent = "";
  let count = 1;

  for (let char of str) {
    if (char === " ") continue;
    if (char in result === false) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }

    if (result[char] > count) {
      count = result[char];
      mostFrequent = char;
    }
  }
  return mostFrequent;
}
