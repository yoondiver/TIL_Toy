function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = {};
  let mostFrequentCharacter = "";
  let count = 0;

  for (let char of str) {
    if (char === " ") {
      result[char] = 1;
    } else {
      result[char] += 1;
    }

    if(result[char] > count)
  }
}
