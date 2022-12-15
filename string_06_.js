function findShortestOfThreeWords(word1, word2, word3) {
  // TODO: 여기에 코드를 작성합니다.

  if (word1.length <= word2.length && word1.length <= word3.length) {
    return word1;
  }
  if (word2.length <= word1.length && word2.length <= word3.length) {
    return word2;
  }
}
