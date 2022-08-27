function filterOddLengthWords(words) {
  // TODO: 여기에 코드를 작성합니다.
  return words.filter(function (el) {
    if (el.length % 2 !== 0) {
      return el;
    }
  });
}
